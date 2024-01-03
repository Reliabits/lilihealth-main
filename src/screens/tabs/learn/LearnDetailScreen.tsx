import { Text } from 'src/components/Text';
import { Spacer20 } from 'src/utils/Spacing';
import { useCallback, useEffect, useState } from 'react';
import { learnListData } from 'src/utils/DummyData';
import { getLearnList } from 'src/helpers/services';
import { ILearn } from 'src/types/interfaces/Learn';
import { useAppDispatch, useAppSelector } from 'src/store/reduxHook';
import { setPosts } from 'src/store/reducers/learnReducer';
import { useSelector } from 'react-redux';
import useVisualFeedback from 'src/hooks/VisualFeedback/useVisualFeedback';
import { useLearnListQuery } from 'src/store/services/Learn.service';
import { useFocusEffect } from '@react-navigation/native';
import { LearnContainer } from '../components/LearnContainer';
import { LearnItem } from '../components/LearnItem';

const LearnDetailScreen = () => {
  const dispatch = useAppDispatch();
  const visualFeedback = useVisualFeedback();
  const learnState = useAppSelector((state) => state.learn);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showCategory, setShowCategory] = useState<boolean>(true);
  const listQuery = useLearnListQuery();
  const [listData, setListData] = useState([...learnState.learnList]);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search articles, vi...');

  useEffect(() => {
    listQuery.isLoading
      ? visualFeedback?.showLoadingBackdrop()
      : visualFeedback?.hideLoadingBackdrop();
    if (listQuery.isSuccess === true) {
      dispatch(setPosts(listQuery.data));
      setListData(listQuery.data);
    }
  }, [listQuery.isLoading, listQuery.isFetching]);

  useFocusEffect(
    useCallback(() => {
      // listQuery.refetch();
      // setListData([...learnState.learnList]);
    }, [])
  );

  return (
    <LearnContainer
      onSelectCategory={(category: string) => {
        const temp: any[] = [];
        if (category === '') {
          setListData(learnState.learnList);
          setSearchPlaceholder('Search articles, vi...');
          setShowCategory(true);
        } else {
          setShowCategory(false);
          if (category === 'Article') {
            setSearchPlaceholder('Search by articles..');
          } else if (category === 'Videos') {
            setSearchPlaceholder('Search by videos..');
          } else if (category === 'Infographics') {
            setSearchPlaceholder('Search by info..');
          }
          learnState.learnList.forEach(
            (item) =>
              item.custom_field &&
              item?.custom_field?.forEach((child) => {
                if (category.toLowerCase().includes(child.toLocaleLowerCase())) temp.push(item);
              })
          );
          setListData([...temp]);
          // setShowCategory(false);
        }
        setSelectedCategory(category);
      }}
      favorite
      searchPlaceholder={searchPlaceholder}
      onSearch={(text) => {
        const newList = learnState.learnList.filter((item) => {
          if (showCategory) {
            return item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase());
          }

          if (
            item.custom_field &&
            selectedCategory.toLowerCase().includes(item.custom_field[0].toLocaleLowerCase())
          ) {
            return item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase());
          }
        });
        setListData([...newList]);
      }}
      onRefresh={() => {
        listQuery.refetch();
      }}
    >
      {showCategory && (
        <Text color="secondary" variant="h2Cg20">
          Recent Uploaded Items
        </Text>
      )}
      <Spacer20 />
      {listData.map((item) => (
        <LearnItem item={item} showCategory={showCategory} />
      ))}
    </LearnContainer>
  );
};

export default LearnDetailScreen;
