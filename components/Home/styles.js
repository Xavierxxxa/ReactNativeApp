import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        btn:{
                backgroundColor: '#DC143C',
                color: '#191970',
                width: 100,
                padding: 4,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                margin: 5,
                textAlign: 'center'
        },
        safe:{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#0000CD'
        },
        text:{
            marginTop: 40,
            fontSize: 20,
            color: '#fff',
        },
        img: {
            height: 100,
            width: 100,
            margin: 10,
            backgroundColor: '#fff',
        }
    }
)

export default styles;