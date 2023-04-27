import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'





const EmployeeNameList = ({ navigation }) => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    Axios.get('https://gorest.co.in/public/v2/users/')
      .then(res => {
        setEmployees(res.data)
      })
      .catch(error => {
        console.log(error);
      })

  }, []);

  const handleEmployee = (employee) => {
    navigation.navigate('details_of_employee', { email: employee.email, gender: employee.gender, name: employee.name })
  }

  const renderEmployeeItem = ({ item }) => {
    return (
      <ScrollView style={styles.conatiner}>
        <TouchableOpacity onPress={() => handleEmployee(item)}>
          <View style={styles.card}>
            <Text style={styles.innertxt}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
  return (
    <View>
      <Text style={styles.Headertxt}>Employee Name List</Text>
      <FlatList
        data={employees}
        renderItem={renderEmployeeItem}
        keyExtractor={(item) => item.id} />
    </View>
  )





  //   return(
  //     <ScrollView style={styles.conatiner}>
  //       <Text style={styles. Headertxt}>Employee Details</Text>

  //         {users.map((item,index)=>{
  //           return(
  //             <TouchableOpacity onPress={()=>navigation.navigate('details_of_employee')}>

  //             <View key={index} style={styles.card}>
  //              <Text style={{fontSize:24,color:'black'}}>{item.name}</Text>

  //              {/* <Text style={{fontSize:18}}>{u.email}</Text>
  //              <Text style={{fontSize:20}}>{u.gender}</Text> */}

  //             </View>
  //             </TouchableOpacity>

  //           )
  //         })

  //         }



  //     </ScrollView>
  //   )
}
export default EmployeeNameList

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    //backgroundColor:"black"
  },
  Headertxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10

  },
  innertxt: {
    fontSize: 20,
    color: 'black'
  },

  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 5,
    //borderColor:'white',
    //borderWidth:5,
    backgroundColor: '#FFB6C1'


  }
})