import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    safe:{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#0000CD'
    },
    titulo: {
        color: 'white',
        fontSize: 28,
        marginTop: 20
    },
    inputEmail: {
        backgroundColor: 'white',
        width: '50%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },

    inputSenha: {
        backgroundColor: 'white',
        width: '50%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },
    btn: {
        backgroundColor: '#DC143C',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        padding: 8,
        borderRadius: 8,
        fontSize: 20
    },
    img: {
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: '#fff',
        
    }
})

export default styles;