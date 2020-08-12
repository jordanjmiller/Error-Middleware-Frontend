


#### Loading spinner
import styled from "styled-components";

import LoadingOverlay from "react-loading-overlay";

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
<StyledLoader active={loading} spinner text='Loading...'> </StyledLoader>

#### timeago
import * as timeago from 'timeago.js';
    
timeago.format(props.created_at)