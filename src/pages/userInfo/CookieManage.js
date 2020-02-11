import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';


export default class CookieManagePage extends Component {
  render() {
    return (
      <>
        <BackButton
          title="Retour"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
        CHARTE D’UTILISATION DES COOKIES
            {'\n'}
            {'\n'}
          </Text>
          <Text style={styles.baseText}>
         BLABLAPHARMA ( « nous », « nos » ou « notre ») utilise les cookies afin de vous proposer
un service web amélioré et davantage personnalisé. À travers cette Charte d’utilisation des
Cookies de BLABLAPHARMA (la « Charte sur les Cookies »), nous vous présentons
comment et pourquoi nous utilisons des cookies sur ce site, en toute transparence.
Qu’est-ce qu’un cookie et à quoi sert-il ?
            {'\n'}
            {'\n'}
Un cookie est un petit fichier texte enregistré, et/ou lu par votre navigateur, sur le disque dur
de votre terminal (PC, ordinateur portable ou smartphone, par exemple) et déposé par les
sites internet que vous visitez. Quasiment tous les sites utilisent des cookies pour bien
fonctionner et optimiser leur ergonomie et leurs fonctionnalités. Les cookies rendent
également les interactions avec les sites plus sécurisées et rapides, dans la mesure où
ceux-ci peuvent se souvenir de vos préférences (telles que votre identifiant et votre langue)
en renvoyant les informations qu’ils contiennent au site d’origine (cookie interne) ou à un
autre site auquel ils appartiennent (cookie tiers), lorsque vous visitez à nouveau le site
concerné à partir du même terminal. Selon leur fonction et le but de leur utilisation, les
cookies sont classés parmi les catégories décrites ci-dessous et utilisées par
BLABLAPHARMA sur ce site :
            {'\n'}
            {'\n'}
Les cookies absolument nécessaires vous permettent de vous déplacer sur le site et
d’utiliser ses fonctionnalités de base. Ils sont généralement installés uniquement en réponse
à des actions de votre part pour accéder à des services, tels que la connexion à un espace
sécurisé de notre site. Ces cookies sont indispensables pour l’utilisation de ce site.
Les cookies de fonctionnalité sont utilisés pour vous reconnaître lorsque vous revenez sur
notre site et nous permettent de vous proposer des fonctionnalités améliorées et davantage
personnalisées, comme l’accueil nominatif et l’enregistrement de vos préférences (le choix
de votre langue ou la région où vous vous trouvez par exemple). Ces cookies collectent des
informations anonymes et ne peuvent pas tracer vos déplacements sur d’autres sites.
Les cookies d’analyse et de performance nous permettent de reconnaître et de compter le
nombre de visiteurs sur notre site et de collecter des informations sur la manière dont notre
site est utilisé (par exemple, quels sont les pages les plus vues par les visiteurs, est-ce que
les internautes ont des messages d’erreur sur certaines de nos pages, etc.). Cela nous
permet d’améliorer la façon dont notre site internet fonctionne, par exemple, en nous
assurant, que les utilisateurs trouvent facilement ce qu’ils cherchent.
            {'\n'}
            {'\n'}
Les cookies publicitaires ou de ciblage enregistrent votre visite sur notre site, ainsi que les
pages que vous avez consultées et les liens que vous avez suivis. Nous utiliserons ces
informations pour afficher des publicités pertinentes en fonction de vos centres d’intérêts. Ils
sont également utilisés pour limiter le nombre d’affichages d’une même publicité et pour
aider à mesurer l’efficacité des campagnes publicitaires. Ainsi, il se peut également que
nous partagions ces informations auprès de tiers (les annonceurs par exemple).
Utilisation des cookies tiers
            {'\n'}
            {'\n'}
Veuillez noter que BLABLAPHARMA utilise les services de tiers pour connaître votre
utilisation de ce site, ceci afin d’optimiser votre expérience utilisateur et d’afficher des
publicités en dehors de ce site. Ces tierces parties (comme par exemple des réseaux
d’annonceurs et des prestataires de services externes, tels que les services d’analyse de
trafic web) peuvent également utiliser des cookies que nous ne maîtrisons pas.
Que faire si vous ne souhaitez pas activer les cookies ?
            {'\n'}
            {'\n'}
Vous pouvez révoquer votre consentement à l’utilisation des cookies à tout moment, de la
façon suivante :
            {'\n'}
            {'\n'}
En paramétrant votre navigateur internet
Si vous souhaitez supprimer les cookies enregistrés sur votre terminal et paramétrer votre
navigateur pour refuser les cookies, vous pouvez le faire via les préférences de votre
navigateur internet. Ces options de navigation relatives aux cookies se trouvent
habituellement dans les menus « Options », « Outils » ou « Préférences » du navigateur que
vous utilisez pour accéder à ce site. Cependant, selon les différents navigateurs existants,
des moyens différents peuvent être utilisés pour désactiver les cookies. Pour en savoir plus
vous pouvez suivre les liens référencés ci-dessous :
            {'\n'}
            {'\n'}
Microsoft Internet Explorer
            {'\n'}
Google Chrome
            {'\n'}
Safari
            {'\n'}
Firefox
            {'\n'}
Opera
            {'\n'}
            {'\n'}
Veuillez noter que si vous refusez, depuis votre navigateur internet, l’enregistrement de
cookies sur votre terminal, vous serez toujours en mesure de naviguer sur ce site, mais
certaines parties et options pourraient ne pas fonctionner correctement.

          </Text>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'justify',
    marginHorizontal: '7%'
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
