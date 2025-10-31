import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants';

const Card = ({ 
  children, 
  style, 
  layout = 'flex',
  columns = 1,
  gap = 10,
  onPress,
  elevation = 3,
}) => {
  const cardStyle = [
    styles.card,
    layout === 'grid' && {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    layout === 'flex' && {
      flexDirection: 'column',
    },
    {
      elevation: elevation,
      shadowOpacity: elevation * 0.036,
    },
    style,
  ].filter(Boolean);

  const childStyle = layout === 'grid' ? {
    width: (100 / columns) + '%',
    padding: gap / 2,
  } : undefined;

  const wrappedChildren = React.Children.map(children, child => {
    if (!child) return null;
    return layout === 'grid' ? (
      <View style={childStyle}>
        {child}
      </View>
    ) : child;
  });

  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer 
      style={cardStyle}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {wrappedChildren}
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
});

export default Card;
