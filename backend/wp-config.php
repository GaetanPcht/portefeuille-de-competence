<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portefeuille-competence' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'T1b9AK%_8qU^bZV #M/@@lGsk^~-d[QjOH{|_(O}<?WBHN2I S*+fn!tGe<3[(UD' );
define( 'SECURE_AUTH_KEY',  '@AXO9l3&pctbnr2K{j/z03<Kq 6pk%8x:-M,s~h_c!LijnNog]$`gbjbsR&}[K4S' );
define( 'LOGGED_IN_KEY',    '4)2;_/t0{pv~^.DxHXfCa(tAxV9mgKxY?DAI}gY4QMY3ed_s/~a Z8sE2ni.-zcb' );
define( 'NONCE_KEY',        'M=~<^g/b%-_#yXl3;3Sv(;zBz4&)vUN;T`EdOM7k4t`!V0uNMiL.g-m1x;``@Yj[' );
define( 'AUTH_SALT',        'o>a4@NIFG{_^<}F){(HE*,6>>DYqa7jbi=0N;eo[I@4b,4:l8tcDxYz/u(s0m`z+' );
define( 'SECURE_AUTH_SALT', '1DKq/P df}>xZD`OJGrQ>^zq7k0]fm18*)R&q5G7<FG6*V,`v*aktc(c@W}?qVsZ' );
define( 'LOGGED_IN_SALT',   ';i^!aXvB3>vxMYN>^t[~u=!]Ex?=8;Da)Uo[nG7!0I jp8!nlwKfprfHYK,Gd L&' );
define( 'NONCE_SALT',       'l8ghcKDV~/(*h-kmHI6L>KJ=5X#uJY_/xo)t$dGgX]#VeI -Xwyui-@jbl]D9llp' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
