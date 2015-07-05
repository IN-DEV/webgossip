#Composant #8 : la super box passe partout
####Attention:
Ce composant depend de angularjs et de angular-material
##Utilisation
pour utiliser la box, il faut simplement appeler la balise `<kaj-box />` comme suit:  
`<kaj-box title="foo" role="bar" >Contenu de la box</kaj-box>`
####Explications
comme vous le voyez, la box a deux attributs: **title** et **role**  
1. ***title***:Titre de la boite de dialogue que vous voulez afficher si vous ommettez cet attribut le titre de la boite sera **Gossip...**  
2. ***role***:le type de boite de dialogue que vous voulez creer; les roles sont pour le moment
* ***alert***: Affiche une boite d'alerte; C'est l'option par defaut(si vous ne precisez pas l'attribut *role* il sera automatiquement a **alert**) apercu d'une alerte:
![boite d'alerte](https://github.com/in-dev/webgossip/box/snapshots/titre_et_role_forget.png "role=alerter")
* ***confirmer***: Ce role creait une boite de confirmation avec les boutons *Annuler* et *Continuer*
![boite de confirmation](/snapshots/titre_continuer.png?raw=true "role=confirmer")
* ***reessayer***: Ce role creait une boite pour demander si **Re&eacute;ssayer** ou **Annuler**
![boite en mode reessayer](/snapshots/sanstitre_reessayer.png?raw=true "role=reessayer")
Voila je crois avoir toout dit bien sure le contenu de la boite est celui de la balise `<kaj-box />`.  
... et voila :ok_hand: .
