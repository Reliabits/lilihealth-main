import { Text } from 'src/components/Text';
import { Spacer20 } from 'src/utils/Spacing';
import { useState } from 'react';
import { learnListData } from 'src/utils/DummyData';
import { LearnContainer } from '../components/LearnContainer';
import { LearnItem } from '../components/LearnItem';

const FavoriteScreen = () => {
  const [listData, setListData] = useState([...learnListData]);
  const [showCategory, setShowCategory] = useState<boolean>(true);

  return (
    <LearnContainer
      onSelectCategory={(category) => {
        setListData(learnListData.filter((item) => item.category === category));
        setShowCategory(false);
      }}
      favorite
      searchPlaceholder="Search articles, vi..."
    >
      {showCategory && (
        <Text color="secondary" variant="h2Cg20">
          Saved Articles
        </Text>
      )}
      <Spacer20 />
      {listData.reverse().map((item) => (
        <LearnItem
          item={item}
          showCategory={showCategory}
          favoriteScreen
          localItem
          onRemoveFavorite={(id) => setListData(listData.filter((obj) => obj.id !== id))}
        />
      ))}
    </LearnContainer>
  );
};

export default FavoriteScreen;
