import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useWindowWidth } from "@react-hook/window-size";
import { Fab } from "@rmwc/fab";
import "@rmwc/fab/styles";

import Theme from "../theme/default";

export interface FloatingActionButtonProps {
  accentColor?: string;
  actions: {
    icon: IconDefinition;
    tooltip: string;
    action: () => void;
  }[];
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = (props) => {
  const windowWidth = useWindowWidth({ initialWidth: 0 });
  const [mini, setMini] = React.useState(false);
  if (typeof window === "undefined") {
    return <div />;
  }

  React.useEffect(() => {
    setMini(windowWidth < 460);
  }, [windowWidth]);

  // TODO: re-enable multiple actions
  // See: https://www.npmjs.com/package/rmwc-fabmenu
  return (
    <div className="fab-container">
      <Fab
        onClick={props.actions[0].action}
        mini={mini}
        style={{
          backgroundColor: props.accentColor || Theme.DEFAULT_ACCENT_COLOR,
        }}
      >
        <FontAwesomeIcon icon={props.actions[0].icon} />
      </Fab>
      <style jsx>{`
        .fab-container {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
        }
      `}</style>
    </div>
  );
};

export default FloatingActionButton;
