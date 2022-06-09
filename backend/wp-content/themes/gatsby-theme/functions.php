<?php

// Register Custom Post Type
function register_experience_post_type() {

    $labels = array(
        'name'                  => _x( 'Experiences', 'Post Type General Name', 'gatsby-theme' ),
        'singular_name'         => _x( 'Experience', 'Post Type Singular Name', 'gatsby-theme' ),
        'menu_name'             => __( 'Experiences', 'gatsby-theme' ),
        'name_admin_bar'        => __( 'Experience', 'gatsby-theme' ),
        'archives'              => __( 'Archive d\'experience', 'gatsby-theme' ),
        'attributes'            => __( 'Attribut de l\'experience', 'gatsby-theme' ),
        'parent_item_colon'     => __( 'Parent de l\'experience', 'gatsby-theme' ),
        'all_items'             => __( 'Toutes les experiences', 'gatsby-theme' ),
        'add_new_item'          => __( 'Ajouter une nouvelle experience', 'gatsby-theme' ),
        'add_new'               => __( 'Ajouter une nouvelle experience', 'gatsby-theme' ),
        'new_item'              => __( 'Nouvelle experience', 'gatsby-theme' ),
        'edit_item'             => __( 'Modifier une experience', 'gatsby-theme' ),
        'update_item'           => __( 'Mettre à jour l\'experience', 'gatsby-theme' ),
        'view_item'             => __( 'Voir l\'experience', 'gatsby-theme' ),
        'view_items'            => __( 'Voir les experiences', 'gatsby-theme' ),
        'search_items'          => __( 'Rechercher une experience', 'gatsby-theme' ),
        'not_found'             => __( 'Aucune experience de trouvée', 'gatsby-theme' ),
        'not_found_in_trash'    => __( 'Aucune experience trouvée dans la corbeille', 'gatsby-theme' ),
        'featured_image'        => __( 'Image à la une', 'gatsby-theme' ),
        'set_featured_image'    => __( 'Définir l\'image à la une', 'gatsby-theme' ),
        'remove_featured_image' => __( 'Supprimer l\'image à la une', 'gatsby-theme' ),
        'use_featured_image'    => __( 'Utiliser l\'image à la une', 'gatsby-theme' ),
        'insert_into_item'      => __( 'Insérer dans l\'experience', 'gatsby-theme' ),
        'uploaded_to_this_item' => __( 'Téléchargé sur cette experience', 'gatsby-theme' ),
        'items_list'            => __( 'Liste d\'experience', 'gatsby-theme' ),
        'items_list_navigation' => __( 'Navigation dans la liste d\'experience', 'gatsby-theme' ),
        'filter_items_list'     => __( 'Filtrer la liste des experiences', 'gatsby-theme' ),
    );
    $args = array(
        'label'                 => __( 'Experience', 'gatsby-theme' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'revisions', 'custom-fields' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'experiences',
        'exclude_from_search'   => true,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
        'hierarchical'          => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'Experience',
        'graphql_plural_name' => 'Experiences',
    );
    register_post_type( 'experiences', $args );

}
add_action( 'init', 'register_experience_post_type', 0 );

// Register Custom Post Type
function register_competence_post_type() {

    $labels = array(
        'name'                  => _x( 'Competence', 'Post Type General Name', 'gatsby-theme' ),
        'singular_name'         => _x( 'Competence', 'Post Type Singular Name', 'gatsby-theme' ),
        'menu_name'             => __( 'Competences', 'gatsby-theme' ),
        'name_admin_bar'        => __( 'Competence', 'gatsby-theme' ),
        'archives'              => __( 'Archive de competence', 'gatsby-theme' ),
        'attributes'            => __( 'Attribut de la competence', 'gatsby-theme' ),
        'parent_item_colon'     => __( 'Parent de la competence', 'gatsby-theme' ),
        'all_items'             => __( 'Toutes les competences', 'gatsby-theme' ),
        'add_new_item'          => __( 'Ajouter une nouvelle competence', 'gatsby-theme' ),
        'add_new'               => __( 'Ajouter une nouvelle competence', 'gatsby-theme' ),
        'new_item'              => __( 'Nouvelle competence', 'gatsby-theme' ),
        'edit_item'             => __( 'Modifier une competence', 'gatsby-theme' ),
        'update_item'           => __( 'Mettre à jour la competence', 'gatsby-theme' ),
        'view_item'             => __( 'Voir la competence', 'gatsby-theme' ),
        'view_items'            => __( 'Voir les competences', 'gatsby-theme' ),
        'search_items'          => __( 'Rechercher une competence', 'gatsby-theme' ),
        'not_found'             => __( 'Aucune competence de trouvée', 'gatsby-theme' ),
        'not_found_in_trash'    => __( 'Aucune competence trouvée dans la corbeille', 'gatsby-theme' ),
        'featured_image'        => __( 'Image à la une', 'gatsby-theme' ),
        'set_featured_image'    => __( 'Définir l\'image à la une', 'gatsby-theme' ),
        'remove_featured_image' => __( 'Supprimer l\'image à la une', 'gatsby-theme' ),
        'use_featured_image'    => __( 'Utiliser l\'image à la une', 'gatsby-theme' ),
        'insert_into_item'      => __( 'Insérer dans la competence', 'gatsby-theme' ),
        'uploaded_to_this_item' => __( 'Télécharger sur cette competence', 'gatsby-theme' ),
        'items_list'            => __( 'Liste des competences', 'gatsby-theme' ),
        'items_list_navigation' => __( 'Navigation dans la liste des competences', 'gatsby-theme' ),
        'filter_items_list'     => __( 'Filtrer la liste des competences', 'gatsby-theme' ),
    );
    $args = array(
        'label'                 => __( 'Competence', 'gatsby-theme' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'revisions', 'custom-fields' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'competences',
        'exclude_from_search'   => true,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
        'hierarchical'          => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'Competence',
        'graphql_plural_name' => 'Competencess',
    );
    unregister_taxonomy("competences");
    register_post_type( 'competence', $args );

}
add_action( 'init', 'register_competence_post_type', 0 );

// Register Custom Post Type
function register_theme_post_type() {

    $labels = array(
        'name'                  => _x( 'Theme', 'Post Type General Name', 'gatsby-theme' ),
        'singular_name'         => _x( 'Theme', 'Post Type Singular Name', 'gatsby-theme' ),
        'menu_name'             => __( 'Themes', 'gatsby-theme' ),
        'name_admin_bar'        => __( 'Theme', 'gatsby-theme' ),
        'archives'              => __( 'Archive de theme', 'gatsby-theme' ),
        'attributes'            => __( 'Attribut du theme', 'gatsby-theme' ),
        'parent_item_colon'     => __( 'Parent du theme', 'gatsby-theme' ),
        'all_items'             => __( 'Tous les themes', 'gatsby-theme' ),
        'add_new_item'          => __( 'Ajouter un nouveau theme', 'gatsby-theme' ),
        'add_new'               => __( 'Ajouter un nouveau theme', 'gatsby-theme' ),
        'new_item'              => __( 'Nouveau theme', 'gatsby-theme' ),
        'edit_item'             => __( 'Modifier un theme', 'gatsby-theme' ),
        'update_item'           => __( 'Mettre à jour le theme', 'gatsby-theme' ),
        'view_item'             => __( 'Voir le theme', 'gatsby-theme' ),
        'view_items'            => __( 'Voir les themes', 'gatsby-theme' ),
        'search_items'          => __( 'Rechercher un theme', 'gatsby-theme' ),
        'not_found'             => __( 'Aucun theme de trouvé', 'gatsby-theme' ),
        'not_found_in_trash'    => __( 'Aucun theme trouvé dans la corbeille', 'gatsby-theme' ),
        'featured_image'        => __( 'Image à la une', 'gatsby-theme' ),
        'set_featured_image'    => __( 'Définir l\'image à la une', 'gatsby-theme' ),
        'remove_featured_image' => __( 'Supprimer l\'image à la une', 'gatsby-theme' ),
        'use_featured_image'    => __( 'Utiliser l\'image à la une', 'gatsby-theme' ),
        'insert_into_item'      => __( 'Insérer dans le theme', 'gatsby-theme' ),
        'uploaded_to_this_item' => __( 'Télécharger sur ce theme', 'gatsby-theme' ),
        'items_list'            => __( 'Liste des themes', 'gatsby-theme' ),
        'items_list_navigation' => __( 'Navigation dans la liste des themes', 'gatsby-theme' ),
        'filter_items_list'     => __( 'Filtrer la liste des themes', 'gatsby-theme' ),
    );
    $args = array(
        'label'                 => __( 'Theme', 'gatsby-theme' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'revisions', 'custom-fields' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => 'themes',
        'exclude_from_search'   => true,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
        'show_in_rest'          => true,
        'hierarchical'          => true,
        'show_in_graphql'       => true,
        'graphql_single_name'   => 'Themes',
        'graphql_plural_name'   => 'Themess',
    );
    unregister_taxonomy("themes");
    register_post_type( 'theme', $args );

}
add_action( 'init', 'register_theme_post_type', 0 );

//function create_themes_hierarchical_taxonomy() {
//
//    $labels = array(
//        'name' => _x( 'Themes', 'taxonomy general name' ),
//        'singular_name' => _x( 'Theme', 'taxonomy singular name' ),
//        'search_items' =>  __( 'Rechercher un theme' ),
//        'all_items' => __( 'Tous les themes' ),
//        'parent_item' => __( 'Theme parent' ),
//        'parent_item_colon' => __( 'Theme parent :' ),
//        'edit_item' => __( 'Modifier le theme' ),
//        'update_item' => __( 'Mettre à jour le theme' ),
//        'add_new_item' => __( 'Ajouter un nouveau theme' ),
//        'new_item_name' => __( 'Nouveau nom de theme' ),
//        'menu_name' => __( 'Themes' ),
//    );
//
//// Now register the taxonomy
//    register_taxonomy('themes',array('experiences'), array(
//        'hierarchical' => true,
//        'labels' => $labels,
//        'show_ui' => true,
//        'show_in_rest' => true,
//        'show_admin_column' => true,
//        'query_var' => true,
//        'rewrite' => array( 'slug' => 'themes' ),
//        'show_in_graphql' => true,
//        'graphql_single_name' => 'themes',
//        'graphql_plural_name' => 'themes',
//    ));
//
//}
//
//add_action( 'init', 'create_themes_hierarchical_taxonomy', 0 );
//
//

//function create_competences_hierarchical_taxonomy() {
//
//    $labels = array(
//        'name' => _x( 'Competences', 'taxonomy general name' ),
//        'singular_name' => _x( 'Competence', 'taxonomy singular name' ),
//        'search_items' =>  __( 'Rechercher une competence' ),
//        'all_items' => __( 'Toutes les competences' ),
//        'parent_item' => __( 'Competence parent' ),
//        'parent_item_colon' => __( 'Competence parent :' ),
//        'edit_item' => __( 'Modifier la competence' ),
//        'update_item' => __( 'Mettre à jour la competence' ),
//        'add_new_item' => __( 'Ajouter une nouvelle competence' ),
//        'new_item_name' => __( 'Nouveau nom de competence' ),
//        'menu_name' => __( 'Competences' ),
//    );
//
//// Now register the taxonomy
//    register_taxonomy('competences',array('experiences'), array(
//        'hierarchical' => true,
//        'labels' => $labels,
//        'show_ui' => true,
//        'show_in_rest' => true,
//        'show_admin_column' => true,
//        'query_var' => true,
//        'rewrite' => array( 'slug' => 'competences' ),
//        'show_in_graphql' => true,
//        'graphql_single_name' => 'competences',
//        'graphql_plural_name' => 'competences',
//    ));
//
//}
//
//add_action( 'init', 'create_competences_hierarchical_taxonomy', 0 );


