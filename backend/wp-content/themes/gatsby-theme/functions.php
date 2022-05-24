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





function create_themes_hierarchical_taxonomy() {

    $labels = array(
        'name' => _x( 'Themes', 'taxonomy general name' ),
        'singular_name' => _x( 'Theme', 'taxonomy singular name' ),
        'search_items' =>  __( 'Rechercher un theme' ),
        'all_items' => __( 'Tous les themes' ),
        'parent_item' => __( 'Theme parent' ),
        'parent_item_colon' => __( 'Theme parent :' ),
        'edit_item' => __( 'Modifier le theme' ),
        'update_item' => __( 'Mettre à jour le theme' ),
        'add_new_item' => __( 'Ajouter un nouveau theme' ),
        'new_item_name' => __( 'Nouveau nom de theme' ),
        'menu_name' => __( 'Themes' ),
    );

// Now register the taxonomy
    register_taxonomy('themes',array('experiences'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'themes' ),
        'show_in_graphql' => true,
        'graphql_single_name' => 'themes',
        'graphql_plural_name' => 'themes',
    ));

}

add_action( 'init', 'create_themes_hierarchical_taxonomy', 0 );


function create_competences_hierarchical_taxonomy() {

    $labels = array(
        'name' => _x( 'Competences', 'taxonomy general name' ),
        'singular_name' => _x( 'Competence', 'taxonomy singular name' ),
        'search_items' =>  __( 'Rechercher une competence' ),
        'all_items' => __( 'Toutes les competences' ),
        'parent_item' => __( 'Competence parent' ),
        'parent_item_colon' => __( 'Competence parent :' ),
        'edit_item' => __( 'Modifier la competence' ),
        'update_item' => __( 'Mettre à jour la competence' ),
        'add_new_item' => __( 'Ajouter une nouvelle competence' ),
        'new_item_name' => __( 'Nouveau nom de competence' ),
        'menu_name' => __( 'Competences' ),
    );

// Now register the taxonomy
    register_taxonomy('competences',array('experiences'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array( 'slug' => 'competences' ),
        'show_in_graphql' => true,
        'graphql_single_name' => 'competences',
        'graphql_plural_name' => 'competences',
    ));

}

add_action( 'init', 'create_competences_hierarchical_taxonomy', 0 );



