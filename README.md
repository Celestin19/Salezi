# SALEZI (Français)

## Présentation

Bonjour, ceci est le guide pour gérer les stocks de votre boutique disponible sur la FNAC. Vous pourrez également, en tant que manager de la FNAC, gérer les boutiques présentes sur votre site. Enfin, en tant qu'administrateur de la FNAC, vous aurez accès à toutes les fonctions.

## Lancement du serveur

Ouvrez le dossier _Salezi_ dans VSCode, puis ouvrez le terminal et tapez la commande suivante:

```
npm run develop
```

Si cette commande ne fonctionne pas, aller dans le fichier appelé _package.json_ et appuyer sur _Debug_. Une fenêtre va se déplier avec plusieurs options. Cliquer sur "**\*Develop** strapi develop\*".

Une fois le serveur lancé, cliquez sur le lien suivant:

http://localhost:1337

Vous arriverez sur une page de connexion. Maintenant suivez le chapitre **_Strapi_**.

# Strapi

## Les différents utilisateurs

Veuillez vous connecter avec l'un de ces rôles (Vendeur, Fnac Manager, ou Fnac Administrateur) selon votre profil.

### Vendeurs :

- **Fnac Seller :**  
  _Mail :_ martinchanvat@fnacseller.com  
  _Mot de passe :_ Fnacseller1

- **Vanden Borre :**  
  _Mail :_ bertrandpatel@vandenborre.be  
  _Mot de passe :_ Vandenborre1

- **PC Clinic :**  
  _Mail :_ charlescosta@pcclinic.com  
  _Mot de passe :_ PCClinic1

- **France Billet :**  
  _Mail :_ elenarodriguez@francebillet.com  
  _Mot de passe :_ Francebillet1

- **Billet Réduc :**  
  _Mail :_ lucasmartin@billetreduc.com  
  _Mot de passe :_ Billetreduc1

- **Nature & Découverte :**  
  _Mail :_ leonbrooks@natureetdecouverte.com  
  _Mot de passe :_ Nature&decouverte1

- **WeFix :**  
  _Mail :_ marionguyen@wefix.com  
  _Mot de passe :_ Wefix123

- **Mister Good Deal :**  
  _Mail :_ maxencekhan@mistergooddeal.com  
  _Mot de passe :_ Mistergooddeal1

---

### Fnac Manager :

_Mail :_ camilledubois@fnacmanager.com  
_Mot de passe :_ Fnacmanager1

---

### Fnac Administrateur :

_Mail :_ jeanlambert@adminfnac.com  
*Mot de passe :*Adminfnac1

## Utilisation de Strapi :

Une fois connecté, vous serez sur le tableau de bord de Strapi. Vous y trouverez à gauche le logo de la FNAC et ensuite différents menus. Voici ceux qui vous intéressent selon votre profils :

### Vendeurs :

- **Content Manager :** Vous pouvez gérer le stock de votre boutique, ajouter, supprimer et modifier des produits. Vous pouvez également accéder aux produits des autres vendeurs, mais vous ne pouvez que les visualiser, pas les éditer.

- **Media Library :** Importez les images des différents produits, gérez-les et créez des dossiers pour les trier.

### Fnac Manager :

- **Content Manager :** Vous pouvez gérez le stock des différentes boutiques disponibles sur la FNAC. Ajoutez, supprimez, modifiez et publiez/dépubliez les produits créés par les vendeurs.

- **Media Library :** Importez les images des différents produits, gérez-les et créez des dossiers pour les trier.

### Super Administrateur

- **Content Manager :** Vous pouvez gérez le stock des différentes boutiques disponibles sur la FNAC. Ajoutez, supprimez, modifiez et publiez/dépubliez les produits créés par les vendeurs.

- **Content-Type Builder :** Créez et supprimez les vendeurs sur votre site FNAC. Modifiez les autorisations de chaque vendeur pour vendre ses produits (nom, description, prix, stock, images, etc.).

- **Media Library :** Importez les images des différents produits, gérez-les et créez des dossiers pour les trier.

- **Settings :** Gérer plusieurs paramètres. Dans _ADMINISTRATION PANEL_, vous pourrez gérer les rôles que vous souhaitez donner au différents utilisateurs. Attribuez ces rôles dans l'onglet Users, ou invitez de nouveaux utilisateurs et attribuez-leur les rôles que vous avez créés.

# Postman

### Les différents utilisateurs :

Avant de continuer sur Postman, copiez-collez l'un de ces jetons (Vendeur, Fnac Manager, ou Fnac Administrateur) selon votre rôle dans la partie _authorization_ avec le type _Bearer Token_.

### Vendeurs :

- **Fnac Seller :**  
  _43fe101896ec23638acd2bedb0655aaccc14d9d25bae291efe430ebafd60ba56cdb062187e7348a1e3ba7b1bb882423799132f5de353a209587602cf1d622ad170044913282abc7d36c5c543053a8fc941a4a1b730225db6205d0e0cb065b4754e498153a8db4ae7784a18e3bf958ae41e54a7e6619185502ddc30a2e1704c25_

- **Vanden Borre :** _61f6bec3386ad886dbdccd7102b00de75b4f0882d308272b92313d390f416f4c565990db74ad76a1377073b3c0d19a57398112cb6aa1f2910ed4a41b2ec5d4d620d35565a7bcfbfe13f2afe5c4abe5c92c70ec0cb21058c2c581bcd75a95a2f5d1c9754e3669c8ee2c9b0f1bb0570b6f53af64e8ed5c9d7284af023e5b347051_

- **PC Clinic :**  
  _051d50dfb6eb94af5bae876e15ebd94dbe9691fad0bb79464026c38d217ac6aa474c90bacd9ac254cc70785351b38ce3c482e076878d804e3abe1ec1c98837962b311e510dfc070b03b9868e6797c25d8a529bbae19be5ea5fe96e5811c5d6fe4f772570af1ff0efda55ee6411c71f128d56d717540c11ed8106f17e452a09e4_

- **France Billet :**  
  _9b7fdc04d55a8006e5b3759420d39b7b618ce401cb266f9556ca62692f878218305a278fc78b9e4d438bd0866a00683749dcb1b6ac9f318cdf3603e14c6a1d6b225782ef24928570eb9b46c1cb54e198e7883e6b07c747681b132c740bba54f5d74e574b824956b9b860c370eb12ff88597e13aac5a431b15f9041dc888a2818_

- **Billet Réduc :**  
  _1d0187d671d5002bca6353fab7e6b46e52f6ebd79cb1c07592422422a1897e0870c6bb2b42c2cf9047fc5dd14a3ae37ad1d904ef5670ce72d1487a58575143a4a6de064e064b746d84cb1757af8e880ce1167218c25289b8f77870c4c3050cd09917549da162aeea4895b2852d4173cf2bed4a99141e57df1c21cfa0ebf52a92_

- **Nature & Découverte :**  
  _c541c0fe6f7afa8263bd9f69ee8fadab748cda116177d163af82923dca1c466a178e3ff8d00e527b20bd3d3c7c8f4d999715e88d60b187e992fff9bf74c5d7bcf9289cd19485694abf2620105a85cc0a13ffaa6094a4d2ccfc2d969b13b6c9d803c383cf1aa44ccd61fb754e5c063c6796e6ce179de25345a8b80bea056fd3b1_

- **WeFix :**  
  _0125094086c74ed65abbad6711fe28722fe65c5fb65853f7be4b96a4e36515ec883f2c5dce34b71706c1192c3353242a44bafab1169ffb78a707ddbe0e918095c051910507a5e5e8550ce0c2da2abc6f61156dd9cc65f32977cae28be5ac0f6d3e87d444782aedfb41578abcb7bc490679001014d1e102ebd7afd030134466ab_

- **Mister Good Deal :**
  _76e280bf765f813ab61fb9a7ed56a215bb01d214bcd820b7da45a5583fe226051243a87acd74efeb28d9a71e1ec6f824414ca213e4204d16729d99de0afd3617d46b3b9828398f9dc7c0340b003bb629242ce0faf4ec68aabd83fb6f5faf778f5d583d7e4d9f1dcaac2924083b48e4b1ece977d3a615e3e6700fc0d22a451772_

---

### Fnac Manager :

_61afc6baf58286f396c870353a39b5bc8aef56e57849ad29c2914fab03960fbc3ed1101da143c5aa7729b16ed662885c2ea86e38ccfd7d348d36d1fde0ca760010f7c18bb4b770c386c3048aa3702bcccf27a92ac597393f8e3046b9d230aa7bd83d72ddddd4cbca3f454bb6587289c91a4677e0322d2794a8c409a0d4a589d1_

---

### Fnac Administrateur :

_e8dd33535f04ecfe7631452c4050d973e51d278828b613eab1e27b0f01603b7c35ccad314721aa616e4d6ea1ab52a6b1650a483fb617f5762d333dde072c35ed34ccd69403cc851e32b7c7846d136a34f3a3d830202e3c616db1fc46d5a156cd785d465054ad30986ffa7b6444f5ca3ade63001f573e53274d6ee1e11b5e7e31_

## Utilisation de Postman :

Une fois connecté, vous pourrez tester les différentes routes disponibles.

### Début de route :

Commencez par mettre ceci comme url :  
http://localhost:1337/api/  
À la suite, ajoutez ce qu'il y a ci-dessous, selon le vendeur avec lequel vous souhaitez utiliser l'API:

- **Vanden Borre :** _vanden-borres_

- **PC Clinic :** _pc-clinics_

- **France Billet :** _france-billets_

- **Billet Réduc :** _billet-reducs_

- **Nature & Découverte :** _nature-and-decouvertes_

- **WeFix :** _we-fixes_

- **Mister Good Deal :** _mister-good-deals_

_PS : Ceci s'appelle une route_

**Voilà un exemple de début de route :** http://localhost:1337/api/vanden-borres

### Les différentes routes possible :

- **GET :** Appuyez simplement sur _Send_ pour avoir accès à tous les produits disponibles du vendeur que vous avez choisi précédemment.

- **GET (by id) :** Ajoutez /{id} à la fin de votre route ({id} étant l'id du produit auquel vous voulez accéder). Enfin, appuyez sur _Send_.  
  Voilà un exemple de début de route : http://localhost:1337/api/vanden-borres/3

- **POST :** Sélectionnez l'option POST à la place de GET. Ensuite, cliquez sur _Body_, puis sur _raw_, puis sélectionnez _JSON_ à la place de _Text_ tout à droite. Pour finir, copiez-collez le modèle ci-dessous en modifiant les options à votre convenance. Enfin, appuyez sur _Send_.

```
{
    "data": {
            "Name": "Exemple",
            "Price": 100,
            "Description": "Exemple",
            "Type": "Exemple",
            "Stock": 100
        }
}
```

- **PUT :** Sélectionnez l'option PUT à la place de POST. Ensuite suivez la démarche de la méthode _POST_. Remplacez seulement les valeurs déjà présentes par les nouvelles que vous voulez mettre. Pour finir, appuyer sur _Sent_

```
{
    "data": {
            "Name": "Modifier",
            "Price": 200,
            "Description": "Modifier",
            "Type": "Modifier",
            "Stock": 200
        }
}
```

- **DELETE :** Rajouter /{id} à la fin de votre route ( {id} étant l'id du produit que vous voulez supprimer ). Pour finir, appuyer sur _Sent_  
  Voilà un exemple de début de route : http://localhost:1337/api/vanden-borres/3

# FIN

Merci de nous avoir fait confiance pour ce projet et d'avoir pris le temps de lire le manuel d'utilisation pour une utilisation optimale, quel que soit votre profil. Si vous rencontrez un quelconque problème, vous pouvez me contacter, je répondrai dans les plus brefs délais.

Merci.


# SALEZI (English)

## Presentation

Hello, this is the guide to managing your FNAC store inventory. As FNAC manager, you'll also be able to manage the stores on your site. Finally, as FNAC administrator, you'll have access to all functions.

## Launch server

Open the _Salezi_ folder in VSCode, then open the terminal and type the following command:

```
npm run develop
```

If this command doesn't work, go to the file named _package.json_ and press _Debug_. A window will unfold with several options. Click on "**Develop** strapi develop\*".

Once the server has been launched, click on the following link:

http://localhost:1337

You'll be taken to a login page. Now follow the **_Strapi_** chapter.

# Strapi

## The different users

Please log in with one of these roles (Seller, Fnac Manager, or Fnac Administrator) according to your profile.

### Sellers :

- **Fnac Seller :**  
  _Mail :_ martinchanvat@fnacseller.com  
  _Password :_ Fnacseller1

- **Vanden Borre :**  
  _Mail :_ bertrandpatel@vandenborre.be  
  _Password :_ Vandenborre1

- **PC Clinic :**  
  _Mail :_ charlescosta@pcclinic.com  
  _Password :_ PCClinic1

- **France Billet :**  
  _Mail :_ elenarodriguez@francebillet.com  
  _Password:_ Francebillet1

- **Billet Réduc :**  
  _Mail :_ lucasmartin@billetreduc.com  
  _Password :_ Billetreduc1  
  
- Nature & Découverte :**  
  _Mail:_ leonbrooks@natureetdecouverte.com  
  _Password:_ Nature&decouverte1

- **WeFix :**  
  _Mail :_ marionguyen@wefix.com  
  _Password:_ Wefix123

- **Mister Good Deal :**  
  _Mail :_ maxencekhan@mistergooddeal.com  
  _Password:_ Mistergooddeal1

---

### Fnac Manager :

_Mail :_ camilledubois@fnacmanager.com  
_Password :_ Fnacmanager1

---

### Fnac Administrator :

_Mail :_ jeanlambert@adminfnac.com  
*Password:* Adminfnac1

## Using Strapi :

Once logged in, you'll be on the Strapi dashboard. On the left, you'll see the FNAC logo, followed by various menus. Here are the ones that interest you according to your profiles:

### Sellers :

- **Content Manager:** You can manage your store's stock, add, delete and modify products. You can also access other sellers' products, but you can only view them, not edit them.

- **Media Library:** Import product images, manage them and create folders to sort them.

### Fnac Manager :

- **Content Manager :** You can manage the stock of the different stores available on FNAC. Add, delete, modify and publish/unpublish products created by sales staff.

- **Media Library:** Import product images, manage them and create folders to sort them.

### Super Administrator

- **Content Manager:** You can manage the stock of the different stores available on FNAC. Add, delete, modify and publish/unpublish products created by sellers.

- **Content-Type Builder:** Create and delete sellers on your FNAC site. Modify each vendor's permissions to sell their products (name, description, price, stock, images, etc.).

- **Media Library:** Import product images, manage them and create folders to sort them.

- **Settings:** Manage multiple settings. In _ADMINISTRATION PANEL_, you can manage the roles you wish to give to different users. Assign these roles in the Users tab, or invite new users and assign them the roles you've created.

# Postman

### The different users :

Before continuing on Postman, copy and paste one of these tokens (Seller, Fnac Manager, or Fnac Administrator) according to your role in the _authorization_ section with the _Bearer Token_ type.

### Sellers :

- **Fnac Seller :**  
  _43fe101896ec23638acd2bedb0655aaccc14d9d25bae291efe430ebafd60ba56cdb062187e7348a1e3ba7b1bb882423799132f5de353a209587602cf1d622ad170044913282abc7d36c5c543053a8fc941a4a1b730225db6205d0e0cb065b4754e498153a8db4ae7784a18e3bf958ae41e54a7e6619185502ddc30a2e1704c25_

- **Vanden Borre :** _61f6bec3386ad886dbdccd7102b00de75b4f0882d308272b92313d390f416f4c565990db74ad76a1377073b3c0d19a57398112cb6aa1f2910ed4a41b2ec5d4d620d35565a7bcfbfe13f2afe5c4abe5c92c70ec0cb21058c2c581bcd75a95a2f5d1c9754e3669c8ee2c9b0f1bb0570b6f53af64e8ed5c9d7284af023e5b347051_

- **PC Clinic :**  
  _051d50dfb6eb94af5bae876e15ebd94dbe9691fad0bb79464026c38d217ac6aa474c90bacd9ac254cc70785351b38ce3c482e076878d804e3abe1ec1c98837962b311e510dfc070b03b9868e6797c25d8a529bbae19be5ea5fe96e5811c5d6fe4f772570af1ff0efda55ee6411c71f128d56d717540c11ed8106f17e452a09e4_

- **France Billet :**  
  _9b7fdc04d55a8006e5b3759420d39b7b618ce401cb266f9556ca62692f878218305a278fc78b9e4d438bd0866a00683749dcb1b6ac9f318cdf3603e14c6a1d6b225782ef24928570eb9b46c1cb54e198e7883e6b07c747681b132c740bba54f5d74e574b824956b9b860c370eb12ff88597e13aac5a431b15f9041dc888a2818_

- **Billet Réduc :**  
  _1d0187d671d5002bca6353fab7e6b46e52f6ebd79cb1c07592422422a1897e0870c6bb2b42c2cf9047fc5dd14a3ae37ad1d904ef5670ce72d1487a58575143a4a6de064e064b746d84cb1757af8e880ce1167218c25289b8f77870c4c3050cd09917549da162aeea4895b2852d4173cf2bed4a99141e57df1c21cfa0ebf52a92_

- **Nature & Découverte :**  
  _c541c0fe6f7afa8263bd9f69ee8fadab748cda116177d163af82923dca1c466a178e3ff8d00e527b20bd3d3c7c8f4d999715e88d60b187e992fff9bf74c5d7bcf9289cd19485694abf2620105a85cc0a13ffaa6094a4d2ccfc2d969b13b6c9d803c383cf1aa44ccd61fb754e5c063c6796e6ce179de25345a8b80bea056fd3b1_

- **WeFix :**  
  _0125094086c74ed65abbad6711fe28722fe65c5fb65853f7be4b96a4e36515ec883f2c5dce34b71706c1192c3353242a44bafab1169ffb78a707ddbe0e918095c051910507a5e5e8550ce0c2da2abc6f61156dd9cc65f32977cae28be5ac0f6d3e87d444782aedfb41578abcb7bc490679001014d1e102ebd7afd030134466ab_

- **Mister Good Deal :**
  _76e280bf765f813ab61fb9a7ed56a215bb01d214bcd820b7da45a5583fe226051243a87acd74efeb28d9a71e1ec6f824414ca213e4204d16729d99de0afd3617d46b3b9828398f9dc7c0340b003bb629242ce0faf4ec68aabd83fb6f5faf778f5d583d7e4d9f1dcaac2924083b48e4b1ece977d3a615e3e6700fc0d22a451772_

---

### Fnac Manager :

_61afc6baf58286f396c870353a39b5bc8aef56e57849ad29c2914fab03960fbc3ed1101da143c5aa7729b16ed662885c2ea86e38ccfd7d348d36d1fde0ca760010f7c18bb4b770c386c3048aa3702bcccf27a92ac597393f8e3046b9d230aa7bd83d72ddddd4cbca3f454bb6587289c91a4677e0322d2794a8c409a0d4a589d1_

---

### Fnac Administrateur :

_e8dd33535f04ecfe7631452c4050d973e51d278828b613eab1e27b0f01603b7c35ccad314721aa616e4d6ea1ab52a6b1650a483fb617f5762d333dde072c35ed34ccd69403cc851e32b7c7846d136a34f3a3d830202e3c616db1fc46d5a156cd785d465054ad30986ffa7b6444f5ca3ade63001f573e53274d6ee1e11b5e7e31_

## Using Postman :

Once connected, you can test the various routes available.

### Starting a route:

Start by setting this as your url:  
http://localhost:1337/api/  
Next, add the following, depending on the vendor you wish to use the API with:

- **Vanden Borre :** _vanden-borres_

- **PC Clinic :** _pc-clinics_

- **France Billet :** _france-billets_

- **Billet Réduc :** _billet-reducs_

- **Nature & Découverte :** _nature-and-decouvertes_

- **WeFix :** _we-fixes_

- **Mister Good Deal :** _mister-good-deals_

_PS: This is called a route_

**Here's an example of the beginning of a route:** http://localhost:1337/api/vanden-borres

### Possible routes:

- **GET :** Simply press _Send_ to access all available products of the seller you have chosen.

- **GET (by id) :** Add /{id} to the end of your route ({id} being the id of the product you wish to access). Finally, press _Send_.  
  Here's an example of how to start a route: http://localhost:1337/api/vanden-borres/3

- **POST:** Select the POST option instead of GET. Next, click on _Body_, then _raw_, then select _JSON_ instead of _Text_ on the far right. Finally, copy and paste the template below, modifying the options as required. Finally, press _Send_.

```
{
    "data": {
            "Name": "Example",
            "Price": 100,
            "Description": "Example",
            "Type": "Example",
            "Stock": 100
        }
}
```

- **PUT :** Select the PUT option instead of POST. Then follow the same procedure as for the _POST_ method. Just replace the values you already have with the new ones you want to put in. Finally, press _Sent_.

```
{
    "data": {
            "Name": "Modify",
            "Price": 200,
            "Description": "Modify",
            "Type": "Modify",
            "Stock": 200
        }
}
```

- **DELETE :** Add /{id} at the end of your route ( {id} being the id of the product you want to delete ). Finally, press _Sent_.  
  Here's an example of how to start a route: http://localhost:1337/api/vanden-borres/3

# END

Thank you for trusting us with this project, and for taking the time to read the user manual for optimal use, whatever your profile. If you encounter any problems, please contact me and I'll get back to you as soon as possible.

I'll get back to you as soon as possible.