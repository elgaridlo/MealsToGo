import React from 'react'
import {View} from 'react-native'
import styled, {useTheme} from 'styled-components/native'

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
}

const positionVariant = {
    top: 'margin-top',
    left: 'margin-left',
    right: 'margin-right',
    bottom: 'margin-bottom',
}

const getVariant = (position, size, theme) => {
    return `${positionVariant[position]}:${theme.space[sizeVariant[size]]}`
}

const SpacerView = styled(View)`
    ${({variant}) => variant}
`;

export const SpacerComponent = ({position, size, children}) => {
    const theme = useTheme()
    const variant = getVariant(position, size, theme)
    return (
        <SpacerView variant={variant}>{children}</SpacerView>
    )
}

SpacerComponent.defaultProps = {
    position: 'top',
    size: 'small'
}