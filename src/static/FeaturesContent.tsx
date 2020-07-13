import React from "react";
import BarChartIcon from "@material-ui/icons/BarChart";
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PaymentIcon from '@material-ui/icons/Payment';
import DescriptionIcon from '@material-ui/icons/Description';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import GavelIcon from '@material-ui/icons/Gavel';
import DevicesIcon from '@material-ui/icons/Devices';

const iconSize = 30;

export const FeaturesContent = [
  {
    color: "#00C853",
    headline: "Labor & Activity Tracking",
    text: "View, record, and manage productivity across the entire organization.",
    icon: <QueryBuilderIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Accurate Harvest Data",
    text: "Capture data using handhelds, printers, biometric scanners, etc.",
    icon: <GroupWorkIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Complex Pay Calculations",
    text: "Customized and precise wage calculations and review process.",
    icon: <PaymentIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Real-Time Insights",
    text: "Instant updates on work-order completion and production progress.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "Custom Detailed Reports",
    text: "Build personalized reports and export in any format that fits your needs.",
    icon: <DescriptionIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Audit Trail",
    text: "Maintain records of every interaction through the application.",
    icon: <VerifiedUserIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
  {
    color: "#304FFE",
    headline: "GPS-enabled Traceability",
    text: "Product lifecycle tracking solutions with GPS, NFC, RFID, and barcodes.",
    icon: <PersonPinCircleIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#C51162",
    headline: "Legal Compliance",
    text: "Strict compliance with I9, labor laws, and wage orders.",
    icon: <GavelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#00B8D4",
    headline: "Available on any device",
    text: "Support for iOS, Android, and Windows devices for on-the-field access.",
    icon: <DevicesIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];