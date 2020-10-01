
import "@trendmicro/react-buttons/dist/react-buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";

// import Theme from '../theme/button-theme';
// import DefaultTheme from
// const DefaultTheme = Theme;

import THEME_NEW from '../theme/button-theme';

import React from "react";
// @ts-ignore
import { Button as LibraryButton } from "@trendmicro/react-buttons";
import Tooltip from "./Tooltip";


interface ThemeProps {
  BORDER : string,
  BG_COLOR: string,
  COLOR: string,
  
  COLOR_HOVER: string,
  BG_COLOR_HOVER: string
}


export enum ButtonStyle {
  LIGHT = "LIGHT",
  DARK = "DARK",
  ANCENT = "ANCENT",
}

const getTheme = (theme: ButtonStyle) :ThemeProps => {
  // let th = theme.toLowerCase();
  switch (theme) {
    case ButtonStyle.DARK:
      return {
          BORDER : THEME_NEW.BTN_BORDER || "1px solid white",
          BG_COLOR: THEME_NEW.BTN_DARK_BG_COLOR,
          COLOR: THEME_NEW.BTN_DARK_COLOR,
          
          COLOR_HOVER: THEME_NEW.BTN_DARK_HOVER_COLOR,
          BG_COLOR_HOVER: THEME_NEW.BTN_DARK_HOVER_BG_COLOR
      }

      case ButtonStyle.LIGHT :
        return {
          BORDER : THEME_NEW.BTN_BORDER || "1px solid white",
          BG_COLOR: THEME_NEW.BTN_NPRIMARY_BG_COLOR,
          COLOR: THEME_NEW.BTN_PRIMARYL_COLOR,
          
          COLOR_HOVER: THEME_NEW.BTN_PRIMARY_HOVER_COLOR,
          BG_COLOR_HOVER: THEME_NEW.BTN_PRIMARY_HOVER_BG_COLOR
        }

      case ButtonStyle.ANCENT :
        return {
          BORDER : THEME_NEW.BTN_BORDER || "1px solid white",
          BG_COLOR: THEME_NEW.BTN_ANCENT_BG_COLOR,
          COLOR: THEME_NEW.BTN_ANCENT_COLOR,
          
          COLOR_HOVER: THEME_NEW.BTN_ANCENT_COLOR_HOVER,
          BG_COLOR_HOVER: THEME_NEW.BTN_ANCENT_BG_COLOR_HOVER
        }

    default:
      return {
        BORDER : THEME_NEW.BTN_BORDER || "1px solid white",
        BG_COLOR: THEME_NEW.BTN_NPRIMARY_BG_COLOR,
        COLOR: THEME_NEW.BTN_PRIMARYL_COLOR,
        
        COLOR_HOVER: THEME_NEW.BTN_PRIMARY_HOVER_COLOR,
        BG_COLOR_HOVER: THEME_NEW.BTN_PRIMARY_HOVER_BG_COLOR
      }
  }
}


const Button: React.FC<ButtonProps> = ({
  onClick,
  icon,
  children,
  compact,
  color,
  theme = ButtonStyle.DARK,
  disabled,
  tooltip,
  updates,
  imageUrl,
}) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const transparent = ButtonStyle.TRANSPARENT == theme;
  const SelectedTheme = getTheme(theme);


  return (
    <>
      <Tooltip content={<div>{tooltip}</div>} isOpen={tooltipOpen} delay={1000}>
        <div
          className={classnames("button", { compact }, { disabled })}
          onMouseEnter={() => tooltip && setTooltipOpen(true)}
          onMouseLeave={() => setTooltipOpen(false)}
        >
          {updates && (
            <div className="updates">
              {updates === true ? (
                <FontAwesomeIcon icon={faCertificate} />
              ) : updates == Infinity ? (
                "∞"
              ) : (
                updates
              )}
            </div>
          )}
          <LibraryButton btnStyle="flat" onClick={onClick} disabled={disabled}>
            {icon && (
              <div className="icon">
                <FontAwesomeIcon icon={icon} />
              </div>
            )}
            {imageUrl && <img className="image" src={imageUrl} />}
            {/* if the button is compact then don't display the text, unless there's no icon or image.*/}
            {(!compact || (!icon && !imageUrl)) && children}
          </LibraryButton>
        </div>
      </Tooltip>
      <style jsx>{`
        .btn--none {
          border: 0px;
          outline: 0;
          
        }
        .custom-button {
          display: inline-block;
          position: relative;
          // padding: 8px 12px;
          line-height: 115%;
        }
        .button > :global(button) {
          border-radius: 25px;
          background-image: none;
          border: 1px solid ${SelectedTheme.COLOR};
          color: ${SelectedTheme.COLOR};
          background-color: ${SelectedTheme.BG_COLOR};
          padding: 8px 12px;
          line-height:115%;
        }

        .button:not(.disabled) > :global(button):hover {
          background-color: ${SelectedTheme.BG_COLOR_HOVER};
          border: 1px solid ${SelectedTheme.BG_COLOR_HOVER};
          color: ${SelectedTheme.COLOR_HOVER};
          cursor: pointer;
        }

        .button:not(.disabled) > :global(button):active:focus {
          background-color: ${SelectedTheme.COLOR};
          border: 2px solid ${SelectedTheme.COLOR};
          color: ${SelectedTheme.COLOR};
        }
        
        .button:not(.disabled) > :global(button):hover .icon {
          color: ${SelectedTheme.COLOR};
        }
        
        .button.disabled > :global(button:hover) {
          background-image: none;
          background-color: ${SelectedTheme.BG_COLOR};
          border-color: ${SelectedTheme.COLOR};
        }

        .disabled .updates {
          opacity: 0.8;
        }

        .icon {
          display: inline-block;
          margin-right: 5px;
        }
        .image {
          margin-right: 5px;
          vertical-align: middle;
          width: 20px;
          height: auto;
          margin-top: -3px;
          margin-left: -3px;
          border-radius: 50%;
        }
        .compact .image {
          margin-left: 0px;
          margin-right: 0px;
        }
        .updates {
          background-color: ${color || 'blue'};
          position: absolute;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          right: -5px;
          top: -5px;
          text-align: center;
          color: ${transparent ? "white" : ''};
          font-size: 14px;
          line-height: 20px;
          font-weight: bold;
        }
        .compact > :global(button) {
          min-width: 25px;
          max-width: 60px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .compact .icon {
          margin-right: 0px;
          color: ${color || 'white'};
        }
      `}</style>
    </>
  );
};

export default Button;

export interface ButtonProps {
  children: string | JSX.Element;
  tooltip?: string | JSX.Element;
  icon?: IconDefinition;
  imageUrl?: string;
  compact?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  theme?: string;
  updates?: number | boolean;
  badge?: number
}
