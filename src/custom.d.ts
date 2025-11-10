// Esto le dice a TypeScript cómo interpretar las importaciones de archivos .mp3
declare module "*.mp3" {
     // Cada vez que se importe un archivo .mp3, su valor será una cadena (string) que representa la URL del archivo dentro del proyecto compilado
    const src: string;
    // Exportamos esa cadena como valor por defecto del módulo
    export default src;
}