import React from "react";
import DropdownListMenu from "../src/common/DropdownListMenu";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { action } from "@storybook/addon-actions";
import Button from '../src/common/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Popup Preview",
  component: DropdownListMenu,
};

export const ClassicDropdownStory = () => {
  return (
    <div style={{ width: "500px", height: "500px", backgroundColor: "white", padding: "15px" }}>
      <DropdownListMenu
        position="bottom left"
          options={[
            {
              name: "no href",
              link: {
                onClick: action("noHrefClick"),
              },
            },
            {
              name: "with href",
              link: {
                onClick: action("withHref"),
                href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              },
            },
          ]}
        >
        <Button theme={'dark'}>bottom left</Button>
      </DropdownListMenu>

      <DropdownListMenu
        position="bottom right"
          options={[
            {
              name: "no href",
              link: {
                onClick: action("noHrefClick"),
              },
            },
            {
              name: "with href",
              link: {
                onClick: action("withHref"),
                href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              },
            },
          ]}
        >
        <Button theme={'dark'}>bottom right</Button>
      </DropdownListMenu>
    </div>
  );
};

ClassicDropdownStory.story = {
  name: "classic",
};

export const IconDropwdownStory = () => {
  return (
    <div style={{ width: "500px", height: "500px", backgroundColor: "white", padding: "15px" }}>
      <DropdownListMenu
      position="bottom center"
        options={[
          {
            name: "no href",
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            name: "with href",
            link: {
              onClick: action("withHref"),
              href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
          },
        ]}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </DropdownListMenu>
    </div>
  );
};

IconDropwdownStory.story = {
  name: "icon",
};


export const ItemsIconDropwdownStory = () => {
  return (
    <div style={{ width: "500px", height: "500px", backgroundColor: "white", padding: "15px" }}>
      <DropdownListMenu
      position="top center"
        options={[
          {
            icon:faUser,
            name: "no href",
            link: {
              onClick: action("noHrefClick"),
            },
          },
          {
            icon: faUser,
            name: "with href",
            link: {
              onClick: action("withHref"),
              href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            },
          },
        ]}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </DropdownListMenu>
    </div>
  );
};

ItemsIconDropwdownStory.story = {
  name: "item with icon",
};
