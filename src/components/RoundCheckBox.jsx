import { Checkbox } from "@mui/material";
import OvalCheckedIcon from "../assets/icons/OvalCheckedIcon";
import OvalIcon from "../assets/icons/OvalIcon";

const RoundCheckBox = props => {
  return <Checkbox disableRipple checkedIcon={<OvalCheckedIcon fontSize="small" color="primary" />} icon={<OvalIcon fontSize="small" color="primary" />} {...props} />;
};

export default RoundCheckBox;