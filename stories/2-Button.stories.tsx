import React from "react";
//import { linkTo } from "@storybook/addon-links";
import Button, { ButtonStyle } from "../src/common/Button";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import mamoru from "./images/mamoru.png";

export default {
  title: "Button Preview",
  component: Button,
};

export const SimpleButton = () => {
  return (
    <div>
      <div>
        <Button theme={ButtonStyle.DARK}>Dark button</Button>
        <Button theme={ButtonStyle.DARK} icon={faCoffee}>Dark button icon</Button>
        <Button theme={ButtonStyle.DARK} icon={faCoffee} disabled={true}>Dark button icon</Button>
        <Button theme={'dark'} imageUrl={mamoru} compact updates={5}>
          Dark with image
        </Button>
      </div>

      <div>
        <Button theme={ButtonStyle.LIGHT}>primary button</Button>
        <Button theme={ButtonStyle.LIGHT} icon={faCoffee}>primary button icon</Button>
        <Button theme={ButtonStyle.LIGHT} icon={faCoffee} disabled={true}>primary button icon</Button>
        <Button theme={ButtonStyle.LIGHT} imageUrl={mamoru} compact updates={5}>
          primary with image
        </Button>
      </div>


      <div>
        <Button theme={ButtonStyle.ANCENT}>ancent button</Button>
        <Button theme={ButtonStyle.ANCENT} icon={faCoffee}>ancent button icon</Button>
        <Button theme={ButtonStyle.ANCENT} icon={faCoffee} disabled={true}>ancent button icon</Button>
        <Button theme={ButtonStyle.ANCENT} imageUrl={mamoru} compact updates={5}>
          ancent with image
        </Button>
      </div>

     
     
      <style jsx>
        {`
          div > div {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin-top: 15px;
          }
        `}
      </style>
    </div>
  );
};

SimpleButton.story = {
  name: "simple",
};
