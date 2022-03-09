import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#417585',
    "&:hover": {
        color: '#8ACBDE'
    },
    fontSize: '2.8rem'
  }
}));

const LogoIcon = ({ playMusic, className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  if(!playMusic)
  {
    return (
      <SvgIcon viewBox="0 0 42 42"  {...rest} className={clsx(classes.root, className)}>
        <path d="M7.458 3.067C3.838 5.818 1.527 15.129 2.08 24.721c.422 7.324 2.397 12.716 5.282 14.424 3.408 2.018 10.942.37 18.753-4.1 7.706-4.408 12.882-9.998 12.882-13.905 0-4.393-6.978-11.31-15.886-15.747-6.973-3.472-12.97-4.364-15.653-2.326zM11.14 42c-1.823 0-3.468-.338-4.797-1.124C2.83 38.796.547 32.95.08 24.837-.433 15.944 1.52 5.06 6.247 1.467c3.34-2.542 9.98-1.747 17.755 2.127C32.449 7.801 41 15.178 41 21.14c0 5.684-7.483 11.984-13.892 15.651C22.363 39.505 16.098 42 11.14 42z" />
      </SvgIcon>
    );
  }
  return (
    <SvgIcon viewBox="0 0 42 42"  {...rest} className={clsx(classes.root, className)}>
      <path d="M9.223 2.02c-.071 0-.142 0-.214.002-2.737.095-5.355 1.911-5.715 3.97-1.764 9.09-1.764 19.926-.004 29.002.364 2.075 2.982 3.891 5.72 3.986 2.735.066 5.304-1.59 5.669-3.672 1.801-9.277 1.801-20.336.005-29.598l-.004-.017c-.356-2.029-2.826-3.675-5.457-3.675m0 38.981a8.55 8.55 0 01-.278-.004c-3.666-.125-7.071-2.651-7.592-5.627-1.805-9.303-1.805-20.432.004-29.752C1.874 2.658 5.279.132 8.945.007c3.68-.16 7.132 2.261 7.673 5.322 1.843 9.504 1.842 20.852-.002 30.354C16.096 38.654 12.811 41 9.223 41m22-38.98c-.071 0-.142 0-.213.002-2.738.095-5.357 1.911-5.717 3.97-1.763 9.091-1.763 19.927-.004 29.003.364 2.075 2.983 3.891 5.72 3.986 2.74.066 5.305-1.59 5.67-3.672 1.8-9.278 1.8-20.337.004-29.598l-.004-.017c-.355-2.029-2.826-3.675-5.456-3.675m0 38.981a8.55 8.55 0 01-.278-.004c-3.665-.125-7.071-2.651-7.592-5.627-1.805-9.303-1.805-20.432.004-29.752.517-2.959 3.923-5.485 7.588-5.61 3.674-.16 7.132 2.261 7.673 5.322 1.843 9.503 1.843 20.851-.001 30.354C38.097 38.654 34.81 41 31.223 41" fill="#2B328C"></path>
    </SvgIcon>
  );
  
}

export default LogoIcon;