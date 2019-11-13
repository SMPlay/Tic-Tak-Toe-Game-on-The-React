import * as styled from '../../../styled/style';

const getSizeIcon = (sizeIcon, sizeCell) => {
    let fontSize = sizeCell * sizeIcon / styled.defaultCellSize;
    return fontSize;
};

export default getSizeIcon