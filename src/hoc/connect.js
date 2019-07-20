import React, { useContext } from 'react';
import Context from 'context';

export const defaultMapState = () => ({});

export const defaultMapDispatch = () => ({});

export const defaultMergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...dispatchProps,
  ...stateProps,
});

export const connect = (
  mapState = defaultMapState,
  mapDispatch = defaultMapDispatch,
  mergeProps = defaultMergeProps
) => Component => {
  return ownProps => {
    const { state, dispatch } = useContext(Context);
    const stateProps = mapState(state, ownProps);
    const dispatchProps = mapDispatch(dispatch, ownProps);
    const mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return <Component {...mergedProps} />;
  };
};

export default connect;
