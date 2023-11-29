import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Privacy = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#16247d',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign
              name="arrowleft"
              size={25}
              style={{
                color: 'white',
                paddingLeft: '5%',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: 'white',
              textAlign: 'center',
              paddingLeft: '26%',
            }}>
            Privacy Policy
          </Text>
        </View>
        <View style={{width: '100%', height: 110, paddingVertical: '5%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
            }}>
            លក្ខខណ្ឌក្នុងការប្រើប្រាស់ អេប
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              paddingVertical: '6%',
              paddingHorizontal: '8%',
            }}>
            ១-លក្ខខណ្ឌរួម
          </Text>
        </View>
        <View
          style={{
            marginTop: 0,
            paddingHorizontal: '1%',
            width: '100%',
            height: 'auto',
          }}>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • លក្ខខណ្ឌនៃការប្រើប្រាស់សេវា យូនីសាឡន ឬហៅថា
            “លក្ខខណ្ឌនៃការប្រើប្រាស់” គឺជាកិច្ចសន្យា ឬ
            កិច្ចព្រមព្រៀងរវាងក្រុមហ៊ុន យូនីសាឡន (UniSalon) និង អតិថិជន
            ក្នុងការប្រើប្រាស់សេវាយូនីសាឡន ។ លក្ខខណ្ឌនេះបង្កើត
            ឡើងសម្រាប់ប្រើអមជាមួយ “ប័ណ្ណផ្សព្វ ផ្សាយ” និង “តារាងថ្លៃសេវា និង
            ការកំណត់ប្រតិបត្តិការសេវា យូនីសាឡន
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • សូមអានកិច្ចសន្យានេះ ឲ្យបានយល់ច្បាស់មុនចុច“យល់ព្រម”
            ចុះឈ្មោះប្រើប្រាស់សេវា ។ នៅពេលលោក-លោកស្រី បានចុច“យល់ព្រម” មានន័យថា
            លោក-លោកស្រី បានយល់ព្រមគ្រប់លក្ខខណ្ឌដែលបានចែងនៅក្នុងកិច្ចសន្យានេះ និង
            ទទួលខុសត្រូវលើការប្រើប្រាស់សេវា យូនី សាឡន របស់លោក-លោកស្រី ។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • ក្រុមហ៊ុន យូនីសាឡន (UniSalon) អាចកែប្រែលក្ខខណ្ឌ និង ថ្លៃសេវា
            យូនីសាឡន គ្រប់ពេលដោយអនុលោមតាមច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា ។
            ក្រុមហ៊ុន និង ជូនដំណឹងទៅលោក-លោកស្រី ក្នុងករណីដែលការកែប្រែនេះ
            ធ្វើឲ្យប៉ះពាល់ដល់សិទ្ធិ និង កាតព្វកិច្ចរបស់លោក-លោកស្រី ។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • នៅក្នុងលក្ខខណ្ឌនៃការប្រើប្រាស់នេះ ពាក្យថា “លោក-លោកស្រី ” “
            របស់លោក-លោកស្រី ”សំដៅដល់អតិថិជនឬម្ចាស់គណនីដែលប្រើប្រាស់សេវា យូនីសាឡន
            ជាមួយក្រុមហ៊ុន យូនីសាឡន (UniSalon)។
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingLeft: '5%',
              color: 'black',
              marginTop: 15,
            }}>
            ពាក្យថា “យើង” “របស់យើង” និង “ក្រុមហ៊ុន” សំដៅដល់ក្រុមហ៊ុន យូនីសាឡន
            (UniSalon)។
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            paddingVertical: '6%',
            paddingHorizontal: '8%',
          }}>
          ២-ពាក្យបច្ចេកទេស និង អត្ថន័យ
        </Text>
        <View style={{paddingHorizontal: '1%', width: '100%', height: 'auto'}}>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • ប្រព័ន្ធ យូនីសាឡន (UniSalon System):
            គឺជាប្រព័ន្ធដែលអភិវឌ្ឍឡើងដោយក្រុមហ៊ុន យូនីសាឡន សម្រាប់ផ្តល់ជូន
            អតិថិជន និង សាធារណជនទូទៅ ធ្វើប្រតិបត្តិការសវាកម្ម
            សាឡនតាមរយៈទូរស័ពុ្ទចល័ត ។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • គណនី យូនីសាឡន (UniSalon Account): គឺជាគណនីអតិថិជនមួយប្រភេទ
            ដែលរក្សាទុកនៅក្នុងប្រព័ន្ធ យូនីសាឡន ។
            គណនីនេះត្រូវបានបង្កើតឡើងនៅពេលអតិថិជន ធ្វើការចុះឈ្មោះប្រើប្រាស់សេវា
            យូនីសាឡន (សេវាសាឡន(Salon) និងបាប៊ឺ(Barber) ជាមួយទូរស័ព្ទចល័ត)
            រួចរាល់។ សូមមើលលម្អិតនូវលក្ខខណ្ឌនៃការប្រើប្រាស់គណនី យូនីសាឡន
            ក្នុងចំណុច ខាងក្រោម ។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • UniSalon Application/App:គឺជាកម្មវិធីប្រតិបត្តិការវិស័យសាឡន(Salon)
            និងបាប៊ឺ(Barber) ដែលត្រូវបញ្ចូលក្នុងទូរស័ព្ទចល័ត។
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            paddingVertical: '6%',
            paddingHorizontal: '8%',
          }}>
          ៣-លក្ខណ្ឌប្រើប្រាស់
        </Text>
        <View
          style={{
            paddingHorizontal: '1%',
            width: '100%',
            height: 'auto',
          }}>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • ត្រូវមានទូរស័ព្ទចល័តផ្ទាល់ខ្លួន និង លេខទូរស័ព្ទ
            ដែលប្រតិបត្តិការដោយ iOS ឬ Android ។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • ត្រូវមានលេខទូរស័ព្ទ G-Mail និង Facebook Account ផ្ទាល់ខ្លួន។
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingLeft: '5%',
              color: 'black',
              marginTop: 15,
            }}>
            បន្ទាប់ពីលោក-លោកស្រីចុះឈ្មោះប្រើប្រាស់សេវា យូនី សាឡនបានសម្រេចហើយ
            ប្រព័ន្ធនឹងបង្កើតគណនីយូនី សាឡន ដោយស្វ័យប្រវត្តិនៅក្នុងប្រព័ន្ធយូនី
            សាឡន។
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            paddingVertical: '6%',
            paddingHorizontal: '8%',
          }}>
          ៤-ការលើកទឹកចិត្ត
        </Text>
        <View
          style={{
            paddingHorizontal: '1%',
            width: '100%',
            height: 'auto',
          }}>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            •
            លើកទឹកចិត្តដល់លោក-លោកស្រីណាដែលផ្តល់មតិយោបល់ល្អៗទៅលើការអភិវឌ្ឍន៍សេវា
            ។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • ផ្តល់រង្វាន់លើកទឹកចិត្ត លោក-លោកស្រី
            ណាដែលប្រើប្រាស់សេវាកម្មយ៉ាងសកម្មនិងដោយមានភាពស្មោះត្រង់ដល់អតិថិជន។
          </Text>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            • ទទួលបាននូវការបញ្ចុះតម្លៃពិសេស សម្រាប់លោក លោកស្រីដែលជាសមាជិករបស់
            ហាងសាឡន និង បាប៊ឺ ។
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            paddingVertical: '6%',
            paddingHorizontal: '8%',
          }}>
          ៥-លក្ខខណ្ឌផ្សេងៗ
        </Text>
        <View>
          <Text style={{fontSize: 15, paddingLeft: '5%', color: 'black'}}>
            ៥.១ លក្ខខណ្ឌនៃការប្រើប្រាស់នេះ សរសេរជាភាសាខ្មែរ និងភាសាអង់គ្លេស
            ប្រសិនបើចំណុចណាមួយមានអត្ថន័យខុសគ្នា រវាងភាសាខ្មែរ និងភាសាអង់គ្លេសនោះ
            លក្ខខណ្ឌជាភាសាខ្មែរត្រូវយកជាបានការ។
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingLeft: '5%',
              color: 'black',
              marginTop: 15,
            }}>
            ៥.២ លក្ខខណ្ឌនៃការប្រើប្រាស់នេះ
            ត្រូវអនុលោមទៅតាមច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា។
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingLeft: '5%',
              color: 'black',
              marginTop: 15,
            }}>
            ខ្ញុំបានអាន និងយល់ព្រមគ្រប់លក្ខខណ្ឌដែលបានបញ្ជាក់ខាងលើនេះ។
          </Text>
        </View>
        <View style={{marginTop: 15, borderWidth: 2}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({});
