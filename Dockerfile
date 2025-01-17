FROM node:alpine AS deps

RUN apk update && apk add --no-cache libc6-compat && apk add git
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --immutable

# Rebuild the source code only when needed
FROM node:alpine AS builder

# add environment variables to client code
ARG NEXT_PUBLIC_HASURA_GRAPHQL_URL
ARG NEXT_PUBLIC_HASURA_ADMIN_SECRET


ENV NEXT_PUBLIC_HASURA_GRAPHQL_URL=$NEXT_PUBLIC_HASURA_GRAPHQL_URL
ENV NEXT_PUBLIC_HASURA_ADMIN_SECRET=$NEXT_PUBLIC_HASURA_ADMIN_SECRET

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ARG NODE_ENV=production
RUN echo ${NODE_ENV}
RUN NODE_ENV=${NODE_ENV} yarn build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration. 
# Copy all necessary files used by nex.config as well otherwise the build will fail.
# COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pages ./pages

USER nextjs

# Expose
EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "start"]