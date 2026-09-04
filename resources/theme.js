export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    COLOR_PRINCIPAL: "#efcd28",
    COLOR_SECUNDARIO: "#252525",
    COLOR_TERCIARIO: "#ffffff",
    // El amarillo sobre blanco da 1.56:1 y no se puede leer. Por eso los textos
    // usan esta versión oscurecida (5.0:1), que sigue siendo de la misma familia.
    COLOR_PRINCIPAL_DEEP: "#836e06",

    // Variantes calibradas para tener excelentes contrastes (Modo oscuro sofisticado)
    COLOR_PRINCIPAL_LIGHT: "#efd764", // Amarillo pastel para hovers y brillos
    COLOR_TERCIARIO_DARK: "#171717",  // Negro más profundo para contrastar las tarjetas oscuras
};
