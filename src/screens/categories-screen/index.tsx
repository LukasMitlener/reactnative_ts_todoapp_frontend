import Category from "@/components/categories/category"
import CreateNewList from "@/components/categories/create-new-list"
import Loader from "@/components/shared/loader"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { fetcher } from "@/services/config"
import { ICategory } from "@/types"
import { Box, Text } from "@/utils/theme"
import React from "react"
import { FlatList } from "react-native"
import useSWR from "swr"

const BASE_URL = "http://10.0.1.15:1337/"

const CategoriesScreen = () => {
  const { data, isLoading, error } = useSWR<ICategory[]>(BASE_URL + "categories", fetcher);

  if (isLoading) {
    return <Loader />
  }

  // Kontrola chyby
  /* if (error) {
    return <Text>Error loading data</Text>;
  } */

  // Debugování dat
  /* console.log(data); */

  const renderItem = ({ item }: { item: ICategory }) => (
    <Category category={item} />
  )

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="4">
        <Text variant="textXl" fontWeight="700" mb="10">
          Categories
        </Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Box height={14} />}
          keyExtractor={(item) => item._id}
        />
        <CreateNewList />
      </Box>
    </SafeAreaWrapper>
  )
}

export default CategoriesScreen;