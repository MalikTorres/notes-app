import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
export default function ApiCall() {

  // loading state


  // data state
  const [apiData, setApiData] = useState({});

  useEffect(() => {

    async function getDataFRomApi() {
      const apiResponse = await fetch('https://dummyjson.com/users');
      const finalData = await apiResponse.json();
      console.log(finalData);
      if (finalData) {
        setApiData(finalData.users.map((userItem) => `${userName.firstName} ${userItem.lastName} $${userItem.age}`));
      }
    }

    getDataFRomApi();

  }, []);

  console.log(apiData);
  return (

    <View>
      <Text> Api Data</Text>

      <View>
        <FlatList
          data={apiData}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}

        />
      </View>
    </View>
  )


}
