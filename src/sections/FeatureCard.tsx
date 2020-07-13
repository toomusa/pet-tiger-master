import React, { Fragment, ReactElement } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

interface Props {
  Icon: ReactElement,
  color: string,
  headline: string,
  text: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconWrapper: {
      borderRadius: theme.shape.borderRadius,
      textAlign: "center",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(1) * 1.5
    },
     cardWrapper: {
       textAlign: "center",
     }
  }),
);

function shadeColor(hex: any, percent: number) {
  const f = parseInt(hex.slice(1), 16);

  const t = percent < 0 ? 0 : 255;

  const p = percent < 0 ? percent * -1 : percent;

  const R = f >> 16;

  const G = (f >> 8) & 0x00ff;

  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
}

function FeatureCard(props: Props) {
  const { Icon, color, headline, text } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.cardWrapper}>
        <div
          // We will set color and fill here, due to some prios complications
          className={classes.iconWrapper}
          style={{
            color: color,
            backgroundColor: shadeColor(color, 0.5),
            fill: color,
          }}
        >
          {Icon}
        </div>
        <Typography variant="h6" paragraph>
          {headline}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {text}
        </Typography>
      </div>
    </Fragment>
  );
}

export default FeatureCard;
