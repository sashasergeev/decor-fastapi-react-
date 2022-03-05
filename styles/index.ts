import styled from "styled-components";

import { VscDebugBreakpointDataUnverified as PointIcon } from "react-icons/vsc";
import { AiOutlineMail as MailIcon } from "react-icons/ai";
import {
  MdOutlineCalculate as CalcIcon,
  MdDoneOutline as DoneIcon,
} from "react-icons/md";
import { BsCalendar4Range as DateIcon } from "react-icons/bs";
import { GrFormNextLink as NextIcon } from "react-icons/gr";

export const Welcome = {
  Box: styled.div`
    height: 50vh;

    box-shadow: inset 0 0 0 1000px #1e233db8;
    background-image: url("images/main-background.webp");
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;
    padding: 25px;

    @media (max-height: 768px) {
      height: 70vh;
    }
  `,
  Title: styled.h1`
    max-width: 1000px;
    margin: 10px auto;
    font-size: 32px;
    text-transform: uppercase;
    color: #d8d8d8;
  `,
  Text: styled.p`
    max-width: 1000px;
    margin: 0 auto;
    font-size: 21px;
    color: #d8d8d8;
  `,
  Image: styled.img`
    margin: 0 auto;
    display: block;
    height: auto;
    max-width: 100%;
  `,
};

export const About = {
  Box: styled.div`
    padding: 30px;
    background-color: #d8d8d8;
    color: #494257;

    text-align: center;
  `,
  Title: styled.h2`
    font-size: 30px;
    text-transform: uppercase;
  `,
  Paragraph: styled.p`
    font-size: 18px;
    max-width: 900px;
    margin: 25px auto;
  `,
};

export const Card = {
  Box: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
  `,
  Elem: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 20px;
    padding: 10px;
    max-width: 500px;
    min-width: 350px;
    background-color: #535769;

    & ul {
      background-color: #2f323f;
      color: #f0f0f0;
      padding: 15px;
      border-radius: 5px;
      box-shadow: inset 0px 0px 17px 0px rgb(0 0 0 / 71%);
    }
    & li {
      display: flex;
      align-items: center;

      gap: 4px;
      font-size: 18px;
      padding: 3px 0px;
      & small {
        color: gray;
      }
    }
    &:nth-of-type(even) {
      align-self: flex-end;
    }
    &:nth-of-type(odd) {
      align-self: flex-start;
    }
  `,
  Title: styled.h3`
    border-radius: 5px;
    color: white;
    padding: 10px;
    margin: 0;
    margin-bottom: 10px;
  `,
  Text: styled.p``,
};

export const Flow = {
  Box: styled.div`
    text-align: center;

    padding: 20px;

    background-color: #282b3e;

    @media (max-width: 768px) {
      padding: 8px;
    }
  `,
  Title: styled.h3`
    font-size: 30px;
    text-transform: uppercase;
    color: #d8d8d8;
  `,
};

export const Icon = {
  Mail: styled(MailIcon)`
    width: 50px;
    height: 50px;
  `,
  Calc: styled(CalcIcon)`
    width: 50px;
    height: 50px;
  `,
  Date: styled(DateIcon)`
    width: 50px;
    height: 50px;
  `,
  Done: styled(DoneIcon)`
    width: 50px;
    height: 50px;
  `,
  Next: styled(NextIcon)`
    width: 45px;
    height: 45px;
    transform: rotate(90deg);
    & path {
      stroke: #ae8be9;
    }
  `,
  Point: styled(PointIcon)`
    height: 20px;
    width: 20px;
  `,
};
