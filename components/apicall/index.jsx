import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
export default function ApiCall() {

  // loading state
  const [loading, setLoading] = useState(false)

  // data state
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    // maintain our loading state
    setLoading(true)
    async function getDataFRomApi() {
      const apiResponse = await fetch('https://dummyjson.com/users');
      const finalData = await apiResponse.json();
      console.log(finalData);
      if (finalData) {
        setApiData(finalData.users.map((userItem) => `${userItem.firstName} ${userItem.lastName}`
        )
        );

        setLoading(false)
      }
    }

    getDataFRomApi();

  }, []);

  console.log(loading, 'loading');
  if (loading) {
    return (
      <ActivityIndicator color={'red'} size='large' />
    )
  }
  console.log(apiData);
  return (

    <View>
      <Text> User Data</Text>

      <View>
        <FlatList
          data={apiData}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}

        />
      </View>
    </View>
  )


}
