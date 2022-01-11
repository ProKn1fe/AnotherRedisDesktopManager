const fr = {
  message: {
    new_connection: 'Nouvelle connexion',
    refresh_connection: 'Actualiser',
    edit_connection: 'Éditer connexion',
    del_connection: 'Supprimer connexion',
    close_connection: 'Fermer connexion',
    add_new_line: 'Ajouter nouvelle ligne',
    redis_version: 'Redis version',
    process_id: 'ID du processus',
    used_memory: 'Mémoire utilisée',
    used_memory_peak: 'Pic de mémoire utilisée',
    used_memory_lua: 'Mémoire utilisée Lua',
    connected_clients: 'Clients connectés',
    total_connections_received: 'Total des connexions reçues',
    total_commands_processed: 'Total des commandes',
    key_statistics: 'Statistiques clés',
    all_redis_info: 'Toutes les informations Redis',
    server: 'Serveur',
    memory: 'Mémoire',
    stats: 'Statistiques',
    settings: 'Paramètres',
    confirm_to_delete_row_data: 'Supprimer les données de cette ligne ?',
    delete_success: 'Suppression réussie',
    delete_failed: 'Suppression échouée',
    modify_success: 'Modification réussie',
    modify_failed: 'Modification échouée',
    add_success: 'Ajout réussi',
    add_failed: 'Ajout échoué',
    value_exists: 'La valeur existe',
    refresh_success: 'Actualisation réussie',
    click_enter_to_rename: 'Cliquez ou pressez Entrée pour renommer',
    click_enter_to_ttl: 'Cliquez ou pressez Entrée pour modifier le TTL',
    confirm_to_delete_key: 'Supprimer {key} ?',
    confirm_to_rename_key: 'Renommer {old} -> {new} ?',
    edit_line: 'Éditer la ligne',
    auto_refresh: 'Actualisation automatique',
    auto_refresh_tip: 'Interrupteur d\'actualisation automatique, actualise toutes les {interval} secondes',
    key_not_exists: 'La clé n\'existe pas',
    collapse_all: 'Tout fermer',
    expand_all: 'Tout étendre',
    json_format_failed: 'Échec de l\'analyse du JSON',
    msgpack_format_failed: 'Échec de l\'analyse du Msgpack',
    php_unserialize_format_failed: 'Échec de la désérialisation PHP',
    clean_up: 'Nettoyer',
    redis_console: 'Console Redis',
    confirm_to_delete_connection: 'Supprimer la connexion ?',
    connection_exists: 'Configuration de connexion existe déjà',
    close_to_edit_connection: 'Vous devez fermer la connexion avant d\'éditer',
    close_to_connection: 'Fermer la connexion ?',
    ttl_delete: 'Définir TTL<=0 supprimera la clé directement',
    max_page_reached: 'Page maximale atteinte',
    add_new_key: 'Nouvelle clé',
    enter_new_key: 'Entrez d\'abord votre nouveau nom de clé',
    key_type: 'Type de la clé',
    save: 'Enregistrer',
    enter_to_search: 'Pressez Entrée pour rechercher',
    export_success: 'Exportation réussie',
    select_import_file: 'Sélectionner le fichier',
    import_success: 'Importation réussie',
    put_file_here: 'Glissez le fichier ici ou cliquez sur Sélectionner',
    config_connections: 'Connexions',
    import: 'Importation',
    export: 'Exportation',
    open: 'Ouvrir',
    close: 'Fermer',
    open_new_tab: 'Ouvrir dans un nouvel onglet',
    exact_search: 'Recherche exacte',
    enter_to_exec: 'Appuyez sur la touche Entrée pour les commandes d\'exécution, sur les touches haut et bas pour passer à l\'historique',
    pre_version: 'Version',
    manual_update: 'Téléchargement de la notice',
    retry_too_many_times: 'Trop de tentatives pour se reconnecter. Veuillez vérifier l\'état du serveur',
    key_to_search: 'Mot-clé de recherche',
    begin_update: 'Mise à jour',
    ignore_this_version: 'Ignorer cette version',
    check_update: 'Vérifier la mise à jour',
    update_checking: 'Vérification des mises à jour, patientez...',
    update_available: 'Nouvelle version trouvée',
    update_not_available: 'Votre application est à jour',
    update_error: 'Mise à jour échouée',
    update_downloading: 'Téléchargement...',
    update_download_progress: 'Téléchargement en cours',
    update_downloaded: 'Téléchargement de la mise à jour terminé, redémarrez l\'application s\'il vous plaît.\
    [Tips]: Si vous utilisez Windows, après avoir fermé l\'application, attendez que l\'icône du bureau soit actualisée à un état normal (environ 10 secondes), puis vous pouvez la rouvrir',
    mac_not_support_auto_update: 'Les Mac ne supportent pas les mises à jour automatique, vous pouvez <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">télécharger</a> et réinstaller manuellement,\
    ou lancer "brew reinstall --cask another-redis-desktop-manager"\
    <br><br>🧡si cela vous est utile, vous pouvez sponsoriser via l\'<a href="https://apps.apple.com/app/id1516451072">AppStore</a>, et l\'AppStore le mettra automatiquement à jour pour vous.',
    font_family: 'Famille de polices',
    font_faq_title: 'Instructions de configuration de polices',
    font_faq: '1. Plusieurs polices peuvent être paramétrées<br>\
    2. La sélection des polices est ordonnée. Il est suggéré de choisir d\'abord la police anglaise et ensuite la police de votre langue<br>\
    3. Dans certains cas exceptionnels, lorsque la liste des polices du système ne peut être chargée, vous pouvez saisir manuellement le nom de la police installée.',
    private_key_faq: 'La clé privée au format RSA est prise en charge, commançant par <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    pour commencer par <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre> vous devez convertir le format via <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre> Cette opéaration n\'affectera pas la précédente clé de connexion',
    dark_mode: 'Mode sombre',
    load_more_keys: 'charger plus',
    key_name: 'Nom de la clé',
    project_home: 'Accueil du projet',
    cluster_faq: 'Sélectionnez n\'importe quel nœud du cluster à remplir, et les autres nœuds seront identifiés automatiquement.',
    redis_status: 'Statut Redis',
    confirm_flush_db: 'Supprimer toutes les clés dans la base de données {db} ?',
    flushdb: 'Sauvegarde de la base de données',
    flushdb_prompt: 'Entrer "{txt}"',
    info_disabled: 'Exception d\'exécution de la commande Info (peut avoir été désactivée), l\'info redis ne peut pas être affichée',
    page_zoom: 'Agrandir la page',
    scan_disabled: 'Exception d\'exécution de la commande Scan (peut avoir été désactivée), la liste des clés ne peut pas être affichée',
    key_type_not_support: 'L\'affichage visuel n\'est pas pris en charge pour ce type. Veuillez utiliser la console',
    delete_folder: 'Analyser et supprimer tout le dossier',
    multiple_select: 'Sélection multiple',
    copy: 'Copie',
    copy_success: 'Copier avec succès',
    keys_to_be_deleted: 'Clés à supprimer',
    delete_all: 'Supprimer tout',
    clear_cache: 'Vider le cache',
    mark_color: 'Couleur de la marque',
    key_no_permission: 'L\'autorisation de lecture de fichier a expiré, veuillez resélectionner le fichier de clé manuellement',
    toggle_check_all: 'Tout sélectionner | Tout désélectionner',
    select_lang: 'Choisir la langue',
    clear_cache_tip: 'Lorsqu\'un problème survient avec le client, cette action supprime toutes les connexions et configurations pour récupérer le client',
    detail: 'Détail',
    separator_tip: 'Le séparateur de l\'arborescence, défini sur vide pour désactiver l\'arborescence et afficher les clés sous forme de liste',
    confirm_modify_unvisible_content: 'Le contenu contient des caractères invisibles, vous pouvez éditer en toute sécurité dans le "Hex View". Si continuer à modifier dans le "Text View" peut provoquer des erreurs de codage, assurez-vous de continuer?',
    keys_per_loading: 'Nombre de clés',
    keys_per_loading_tip: 'Le nombre de clés chargées à chaque fois. Un paramètre trop grand peut affecter les performances',
    host: 'Adresse',
    port: 'Port',
    username: 'Nom d\'utilisateur',
    password: 'Le mot de passe',
    connection_name: 'Nom d\'usage',
    separator: 'Délimiteur',
    timeout: 'Temps libre',
    private_key: 'Clé privée',
    public_key: 'Clé publique',
    authority: 'Autorité',
    redis_node_password: 'Mot de passe du nœud Redis',
    master_group_name: 'Nom du groupe Master',
    command_log: 'Enregistrer',
    sentinel_faq: 'Vous pouvez choisir l\'une des plusieurs sentinelles. Veuillez remplir la configuration de la sentinelle pour l\'adresse, le port et le mot de passe. Le mot de passe du nœud Redis est le mot de passe du nœud maître surveillé par la sentinelle.',
    hotkey: 'Touche de raccourci',
    persist: 'Supprimer l\'heure d\'expiration',
    custom_formatter: 'Formateur personnalisé',
    edit: 'Éditer',
    new: 'Ajouter',
    custom: 'Personnaliser',
    hide_window: 'Masquer la fenêtre',
    minimize_window: 'Réduire la fenêtre',
    maximize_window: 'Agrandir la fenêtre',
    load_all_keys: 'charger tout',
    show_load_all_keys: 'Activer le bouton pour charger toutes les clés',
    load_all_keys_tip: 'Chargez toutes les clés en même temps. Si le nombre de clés est trop important, le client peut rester bloqué ou même planter. Veuillez l\'utiliser correctement',
    tree_node_overflow: 'Il y a trop de touches ou de dossiers, ne laissant que {num} à afficher. Si votre clé n\'est pas ici, une recherche floue est recommandée, ou définissez un séparateur pour disperser la clé dans le dossier',
  },
};

export default fr;
