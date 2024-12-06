# Expense-Tracker-with-Budget-Alerts


# Expense Tracker Project

## Description
Cette application est un gestionnaire de dépenses comprenant :
- **Backend** : Développé en .NET.
- **Frontend** : Développé avec Angular.
- **Base de données** : MySQL (via XAMPP) avec une base de données nommée `expensetrackerdb`.

## Prérequis
Assurez-vous que les outils suivants sont installés sur votre machine :

1. [.NET SDK](https://dotnet.microsoft.com/download)
2. [Node.js](https://nodejs.org/) et npm (fourni avec Node.js)
3. [Angular CLI](https://angular.io/cli) : `npm install -g @angular/cli`
4. [XAMPP](https://www.apachefriends.org/index.html) (pour MySQL et phpMyAdmin)

---

## Étapes pour démarrer

### 1. Cloner le projet
Clonez ce dépôt sur votre machine locale :
```bash
git clone https://github.com/ZakariaLamchanneq/Expense-Tracker-with-Budget-Alerts.git
cd Expense-Tracker-with-Budget-Alerts
```

---

### 2. Configurer le Backend (.NET)

1. Accédez au répertoire du backend :
   ```bash
   cd Backend
   ```

2. Restaurez les dépendances :
   ```bash
   dotnet restore
   ```

3. Configurez la chaîne de connexion pour la base de données dans `appsettings.json` :
   ```json
   "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=expensetrackerdb;User Id=root;Password=;"
   }
   ```

4. Appliquez les migrations et initialisez la base de données :
   ```bash
   dotnet ef database update
   ```

5. Lancez le serveur :
   ```bash
   dotnet run
   ```

   Le backend sera disponible à l'adresse [http://localhost:5000](http://localhost:5000).

---

### 3. Configurer le Frontend (Angular)

1. Accédez au répertoire du frontend :
   ```bash
   cd Frontend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur Angular :
   ```bash
   ng serve
   ```

   L'application sera accessible à [http://localhost:4200](http://localhost:4200).

---

### 4. Configurer la base de données (XAMPP)

1. Lancez XAMPP et démarrez les services **Apache** et **MySQL**.
2. Accédez à phpMyAdmin à l'adresse [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3. Créez une base de données nommée `expensetrackerdb` (si elle n'est pas déjà créée).
4. Les tables seront créées automatiquement via les migrations du backend.

---

## Liens utiles
- [.NET Documentation](https://learn.microsoft.com/en-us/dotnet/)
- [Angular Documentation](https://angular.io/docs)
- [XAMPP Documentation](https://www.apachefriends.org/index.html)

---

## Problèmes courants
- **Port occupé** : Si un port (5000 ou 4200) est occupé, changez-le dans les fichiers de configuration respectifs.
- **Erreur de migration** : Vérifiez que la chaîne de connexion est correctement configurée et que MySQL est en cours d'exécution.

---
