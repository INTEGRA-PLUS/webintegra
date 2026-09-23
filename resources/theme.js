export default {
    /**
     * CONFIGURACIÓN DE COLORES DE LA EMPRESA (PLATILLA)
     * =================================================
     * Al estar creado como un archivo separado que Git rastrea, al cambiar
     * de rama de Git para la otra empresa, se cargarán sus propios colores 
     * en lugar de requerir cambios en el archivo .env (que Git ignora).
     */
    // Azul de la píldora "SAS" del logo. Da 4.5:1 con texto blanco encima,
    // por eso es el de fondos y botones (el #2596be del logo solo da 3.4:1).
    COLOR_PRINCIPAL: "#357ab8",
    COLOR_SECUNDARIO: "#252525",
    COLOR_TERCIARIO: "#ffffff",
    // Azul más oscuro del logo para textos sobre fondo claro (6.9:1).
    COLOR_PRINCIPAL_DEEP: "#2759a6",

    // Variantes calibradas para tener excelentes contrastes (Modo oscuro sofisticado)
    COLOR_PRINCIPAL_LIGHT: "#2596be", // Azul brillante del logo para hovers y brillos
    COLOR_TERCIARIO_DARK: "#171717",  // Negro más profundo para contrastar las tarjetas oscuras
};
