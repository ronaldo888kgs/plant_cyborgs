
import { makeStyles } from '@material-ui/core/styles';

import LogoWithTitle from 'components/LogoWithTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3%'
  },
  margin: {
    margin: `${theme.spacing(0)} !important`,
  },
  height: {
    paddingLeft: theme.spacing(0)
  }
}));

const TopAppBarLeft = ({ setOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LogoWithTitle setOpen={setOpen}  titleVariant={'h6'} className={classes.margin} />
    </div>
  );
};

export default TopAppBarLeft;
