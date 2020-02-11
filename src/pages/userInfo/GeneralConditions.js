import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';


export default class GeneralConditionPage extends Component {
  render() {
    return (
      <>
        <BackButton
          title="Retour"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
        CONDITIONS GÉNÉRALES D’UTILISATION
            {'\n'}
            {'\n'}
          </Text>
          <Text style={styles.baseText}>
1. Objet{'\n'}{'\n'}
La société BLABLAPHARMA édite une plateforme de mise en relation entre des particuliers
et des pharmaciens pour permettre un suivi client de leur traitement et des informations
annexes pour mieux comprendre leur traitement.{'\n'}{'\n'}
Les présentes conditions générales d’utilisation ont pour objet d’encadrer l’accès et les
modalités d’utilisation de la Plateforme. Nous vous invitons à en prendre attentivement
connaissance. Vous comprenez et reconnaissez que BLABLAPHARMA n’est partie à aucun
accord, contrat ou relation contractuelle, de quelque nature que ce soit, conclu entre les
Membres de sa Plateforme.{'\n'}{'\n'}
En cliquant sur le bouton « Inscription avec un email », vous reconnaissez avoir pris
connaissance et acceptez l’intégralité des présentes conditions générales d’utilisation.
2. Définitions{'\n'}{'\n'}
« CGU » désigne les présentes Conditions Générales d’Utilisation ;{'\n'}{'\n'}
« Compte » désigne le compte qui doit être créé pour pouvoir devenir Membre et accéder à
certains services proposés par la Plateforme ;{'\n'}{'\n'}
« Membre » désigne toute personne physique ayant créé un Compte sur la Plateforme ;
« Plateforme » a le sens qui lui est donné à l’article 1, ci-dessus ;{'\n'}{'\n'}
« Services » désigne l’ensemble des services rendus par BLABLAPHARMA par
l’intermédiaire de la Plateforme ;{'\n'}{'\n'}
« Site » désigne le site internet accessible à l’adresse http://www.blablapharma.fr
« Vidéo » désigne les vidéos explicatives du site ;
3. Inscription à la Plateforme{'\n'}{'\n'}
3.1. Conditions d’inscription à la Plateforme{'\n'}{'\n'}
L’utilisation de Plateforme est réservée aux personnes physiques âgées de 13 ans ou plus.
Toute inscription sur la Plateforme par une personne mineure est strictement interdite. En
accédant, utilisant ou vous inscrivant sur la Plateforme, vous déclarez et garantissez avoir 13
ans ou plus.{'\n'}{'\n'}
3.2. Création de Compte{'\n'}{'\n'}
La Plateforme permet aux Membres de communiquer avec des pharmaciens et regarder
des vidéos explicatives.{'\n'}{'\n'}
Pour créer votre Compte, vous devez remplir l’ensemble des champs obligatoires figurant
sur le formulaire d’inscription.{'\n'}{'\n'}
Pour vous inscrire sur la Plateforme, vous devez avoir lu et accepter les présentes CGU
ainsi que la Politique de Confidentialité.{'\n'}{'\n'}
A l’occasion de la création de votre Compte vous vous engagez à fournir des informations
personnelles exactes et conformes à la réalité et à les mettre à jour, par l’intermédiaire de
votre profil ou en en avertissant BLABLAPHARMA, afin d’en garantir la pertinence et
l’exactitude tout au long de votre relation contractuelle avec BLABLAPHARMA.
Vous vous engagez à garder secret le mot de passe choisi lors de la création de votre
Compte et à ne le communiquer à personne. En cas de perte ou divulgation de votre mot de
passe, vous vous engagez à en informer sans délai BLABLAPHARMA. Vous êtes seul
responsable de l’utilisation faite de votre Compte par un tiers, tant que vous n’avez pas
expressément notifié BLABLAPHARMA de la perte, l’utilisation frauduleuse par un tiers ou la
divulgation de votre mot de passe à un tiers.
Vous vous engagez à ne pas créer ou utiliser, sous votre propre identité ou celle d’un tiers,
d’autres Comptes que celui initialement créé.{'\n'}{'\n'}
3.3. Vérification{'\n'}{'\n'}
BLABLAPHARMA peut, à des fins de transparence, d’amélioration de la confiance, ou de
prévention ou détection des fraudes, mettre en place un système de vérification de certaines
des informations que vous fournissez sur votre profil.{'\n'}{'\n'}
Vous reconnaissez et acceptez que toute référence sur la Plateforme à des informations dites
« vérifiées » ou tout terme similaire, signifie uniquement qu’un Membre a réussi avec succès
la procédure de vérification existante sur la Plateforme afin de vous fournir davantage
d’informations aux pharmaciens. BLABLAPHARMA ne garantit ni la véracité, ni la fiabilité, ni
la validité de l’information ayant fait l’objet de la procédure de vérification.{'\n'}{'\n'}
4. Utilisation des Services{'\n'}{'\n'}
4.1. Le patient{'\n'}{'\n'}
Le patient a accès au visionnage de vidéos éducatives. Il peut proposer les sujets de vidéos
qu'il aimerait voir traités.
Le patient a également accès à une conversation privée avec un pharmacien. Il peut s'agir
de son pharmacien désigné ou d'un pharmacien salarié de BlaBlaPHARMA.{'\n'}{'\n'}
4.2. Le pharmacien{'\n'}{'\n'}
Le pharmacien a accès au visionnage des vidéos. Il peut créer des vidéos et les mettre sur
le site (après approbation du site, davantage sur la forme que sur le fond de la vidéo). Le
pharmacien peut répondre aux questions des patients sur les commentaires des vidéos. Le
pharmacien peut répondre aux questions des patients via la messagerie privée du patient.
Le pharmacien peut transférer les vidéos de la base de données vers la conversation avec
le patient.{'\n'}{'\n'}
5. Comportement des utilisateurs de la Plateforme et
Membres{'\n'}{'\n'}
Vous reconnaissez être seul responsable du respect de l’ensemble des lois, règlements et
obligations applicables à votre utilisation de la Plateforme.{'\n'}{'\n'}
6. Suspension de comptes, limitation d’accès et
résiliation{'\n'}{'\n'}
Vous avez la possibilité de mettre fin à votre relation contractuelle avec BLABLAPHARMA à
tout moment, sans frais et sans motif. Pour cela, il vous suffit de vous rendre dans l’onglet «
Fermeture de compte » de votre page Profil.
En cas de (i) violation de votre part des présentes CGU, notamment de vos obligations en
tant que Membre mentionnées dans l’articles 5 ci-dessus ou si (ii) BLABLAPHARMA a des
raisons sérieuses de croire que ceci est nécessaire pour protéger sa sécurité et son intégrité,
celles de ses Membres ou de tiers ou à des fins de prévention des fraudes ou d’enquêtes,
BLABLAPHARMA se réserve la possibilité de :{'\n'}{'\n'}
● (i) résilier, immédiatement et sans préavis, les présentes CGU ; et/ou{'\n'}
● (ii) limiter votre accès et votre utilisation de la Plateforme ; et/ou{'\n'}
● (iii) suspendre de façon temporaire ou permanente votre Compte.{'\n'}{'\n'}
Lorsque cela est nécessaire, vous serez notifié de la mise en place d’une telle mesure afin de
vous permettre de donner des explications à BLABLAPHARMA. BLABLAPHARMA décidera,
à sa seule discrétion, de lever les mesures mises en place ou non.{'\n'}{'\n'}
7. Données personnelles{'\n'}{'\n'}
Dans le cadre de votre utilisation de la Plateforme, BLABLAPHARMA est amenée à
collecter et traiter certaines de vos données personnelles. En utilisant la Plateforme et vous
inscrivant en tant que Membre, vous reconnaissez et acceptez le traitement de vos données
personnelles par BLABLAPHARMA conformément à la loi applicable et aux stipulations de
la Politique de Confidentialité.{'\n'}{'\n'}
8. Propriété intellectuelle{'\n'}{'\n'}
Le texte et les logos utilisés sur ce site sont à la propriété de leur éditeur et tout contenu
copié peut entraîner de lourdes sanctions.
Les vidéos et les images mis à disposition sur la plateforme sont à la propriété de leur
créateur et leur utilisation sont soumises à autorisation par l’éditeur de ces dernières et tout
contenu copié peut entraîner de lourdes sanctions.{'\n'}{'\n'}
9. Responsabilité{'\n'}{'\n'}
9.1. Responsabilité de l’éditeur de la page et ses limites{'\n'}{'\n'}
L’éditeur de la page se tient à respecter la Politique de Confidentialité (que vous pouvez
consulter en cliquant sur le lien). Son rôle se limite à permettre au patient d’avoir un lien
avec des pharmaciens et d’avoir à disposition de l’aide lors de la prise de leur traitement. De
plus l’éditeur peut se permettre de supprimer un compte si il remarque que celui-ci est
dangereux pour son site et ses utilisateurs.{'\n'}{'\n'}
9.2. Responsabilité du visiteur de la page{'\n'}{'\n'}
Le visiteur de la page se tient responsable de tous ses agissements sur le site. Aussi, il est
responsable de ces propos sur le forum ou le tchat avec les pharmaciens. Tout
débordement pourra être sanctionné.{'\n'}{'\n'}
9.3. Responsabilité du pharmacien de la page{'\n'}{'\n'}
Les pharmaciens de Blablapharma ne sont pas autorisés à fournir de diagnostic concernant
les pathologies. Blablapharma ne peut remplacer votre pharmacien et médecin traitant. Les
pharmaciens intervenant sur Blablapharma sont à votre disposition pour vous renseigner sur
la bonne utilisation des médicaments, répondre à des questions concernant vos traitements.
Ils peuvent vous orienter vers des professionnels de santé adaptés à votre situation en cas
de besoin. Le site ne doit pas interférer avec les règles générales de déontologie
professionnelles auxquelles sont soumis tous les pharmaciens, notamment :{'\n'}{'\n'}
● respecter la vie et la personne humaine ;{'\n'}
● contribuer à l'information et à l'éducation sanitaire du public ;{'\n'}
● préserver son indépendance professionnelle ;{'\n'}
● respecter le secret professionnel ;{'\n'}
● ou encore faire preuve du même dévouement envers toutes les personnes qui ont
recours à leur art.{'\n'}{'\n'}
10. Fonctionnement, disponibilité et fonctionnalités de
la Plateforme{'\n'}{'\n'}
BLABLAPHARMA s’efforcera, dans la mesure du possible, de maintenir la Plateforme
accessible 7 jours sur 7 et d’être joignable pendant les horaires indiqués sur le site.
Néanmoins, l’accès à la Plateforme pourra être temporairement suspendu, sans préavis, en
raison d’opérations techniques de maintenance, de migration, de mises à jour ou en raison
de pannes ou de contraintes liées au fonctionnement des réseaux.
En outre, BLABLAPHARMA se réserve le droit d’intervenir pour modifier ou interrompre, à sa
seule discrétion, de manière temporaire ou permanente, tout ou partie de l’accès à la
Plateforme ou de ses fonctionnalités.{'\n'}{'\n'}
11. Modification des CGU{'\n'}{'\n'}
Les présentes CGU et les documents intégrés par référence expriment l’intégralité de l’accord
entre vous et BLABLAPHARMA relative à votre utilisation des Services. Tout autre document,
notamment toute mention sur la Plateforme (FAQ, etc.), n’a qu’une valeur informative.
BLABLAPHARMA pourra être amenée à modifier les présentes Conditions Générales
d’Utilisation afin de s’adapter à son environnement technologique et commercial et afin de se
conformer à la réglementation en vigueur. Toute modification des présentes CGU sera publiée
sur la Plateforme avec une mention de la date de mise à jour et vous sera notifiée par
BLABLAPHARMA avant son entrée en vigueur.{'\n'}{'\n'}
12. Droit applicable – Litige{'\n'}{'\n'}
Les présentes CGU sont rédigées en français et soumises à la loi française.
Vous pouvez également présenter, le cas échéant, vos réclamations relatives à notre
Plateforme ou à nos Services, sur la plateforme de résolution des litiges mise en ligne par la
Commission Européenne accessible ici. La Commission Européenne se chargera de
transmettre votre réclamation aux médiateurs nationaux compétents. Conformément aux
règles applicables à la médiation, vous êtes tenus, avant toute demande de médiation, d’avoir
fait préalablement part par écrit à BLABLAPHARMA de tout litige afin d’obtenir une solution
amiable.
...{'\n'}{'\n'}
13. Mentions légales{'\n'}{'\n'}
Les mentions légales sont destinées à apporter une information minimale au consommateur. Appliquées
à internet, leur indication dans un site doit être accessible sur chaque page du site. En application de la
loi pour la confiance dans l’économie numérique ( loi CEN , n° 2004-575 du 21 juin 2004), elles doivent
impérativement contenir les éléments suivants.
a. Loi CEN, article 6-III{'\n'}
→ Pour tous les sites :{'\n'}{'\n'}
● Le Site : nom + URL complète + contact e-mail générique ;{'\n'}{'\n'}
● La société : dénomination sociale + siège social + adresse (avec le pays) + numéro de
téléphone + numéro d’inscription ( RCS ou métiers) + capital social ;{'\n'}{'\n'}
● Le(s) dirigeant(s) de la société : nom(s) + qualités ;{'\n'}{'\n'}
● Le ou les directeurs de publication du site : nom + qualités + contact e-mail ;{'\n'}{'\n'}
● L’hébergeur du site : dénomination sociale de la société + adresse du siège social + numéro
de téléphone + numéro RCS + capital social + contact e-mail ;{'\n'}{'\n'}
● Une référence à la loi informatique et libertés : droit de modification et de suppression des
données personnelles ( droit d’opposition : art. 38 et s. ){'\n'}{'\n'}
● Un contact mail de signalement de contenus inappropriés ou illégaux ;{'\n'}{'\n'}
● Le statut du site : qualité d’hébergeur ou d’éditeur de contenus publiés par les utilisateurs. De
cette qualité découlera l’absence ou la mise en jeu de la responsabilité juridique de la société
quant aux contenus (commentaires, images, liens, etc.) publié directement par les internautes ;{'\n'}{'\n'}
● Un lien vers les CGU et les CGV.{'\n'}{'\n'}
b. Loi CEN, article 19
→ Pour les activités de commerce électronique (fourniture de biens ou prestations de services en ligne)
:{'\n'}{'\n'}
● La société : raison sociale + siège social (adresse avec le pays) + numéro de téléphone +
contact e-mail générique + numéro d’inscription RCS ou au répertoire des métiers + capital
social + numéro de TVA + numéros d’inscriptions aux régimes d’autorisations spéciales (avec
nom et adresse de l’autorité délivrente) ;{'\n'}{'\n'}
● Pour les professions réglementées : les règles professionnelles applicables + titre
professionnel, + l’état où il a été délivré + nom de l’ordre ou de l’organisme professionnel
concerné ;{'\n'}{'\n'}
● En présence de prix de vente (biens ou services) : les prix (de manière claire et non
ambiguë) + les taxes + les frais de livraison (même s’il s’agit de livraisons gratuites).{'\n'}{'\n'}
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
