import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// Mulitilingual Config
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  }
}
// Mulitilingual Config

export default function App(props: any) {
  const { t } = useTranslation()

  const routerEn = useRouter()
  const routerFa = useRouter()

  const handlePressEn = () => {
    routerEn.push('/en')
  }
  const handlePressFa = () => {
    routerFa.push('/fa')
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>{t('home:welcome_msg')}</Text>
          <Text style={styles.text}>{t('home:title')}</Text>
        </View>
        <View style={styles.btnHolder}>
          <Button title={t('common:En_btn')} color="#2e2e2e" onPress={handlePressEn} />
          <Button title={t('common:Fa_btn')} color="#2e2e2e" onPress={handlePressFa} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '1200px',
    height: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24,
    marginBottom: 15,
  },
  main: {
    width: '100%',
    backgroundColor: '#b3fcd1',
    borderRadius: 25,
  },
  textHolder: {
    textAlign: 'center',
    padding: '10px',
  },
  btnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: '15px',
  },
})
