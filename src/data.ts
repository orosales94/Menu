import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    id: 'antojos',
    title: 'Antojos y Comida Rápida',
    iconName: 'Pizza',
    items: [
      { id: 'a1', name: 'Nachos', description: 'Tortillas de maíz, queso cheddar y mozzarella, chimichurri, frijoles molidos y escogencia de carne mechada, pollo mechado o vegetales.', price: 4000, popular: true },
      { id: 'a2', name: 'Papanachos', description: 'Deliciosas papas fritas en lugar de tortillas con todos los arreglos de nuestros nachos.', price: 4500 },
      { id: 'a3', name: 'Patacones', description: 'Patacones con su escogencia de carne mechada, pollo mechado o vegetales. Acompañados con frijoles molidos, queso fresco y chimichurri.', price: 4000, popular: true },
      { id: 'a4', name: 'Empanada Arreglada', description: 'Empanada casera rellena, guarnecida con repollo, ketchup y mayonesa.', price: 2500 },
      { id: 'a5', name: 'Empanada Sencilla', description: 'Empanada casera rellena con su escogencia de carne mechada, pollo mechado, queso o frijoles molidos.', price: 2000 },
      { id: 'a6', name: 'Tico Burrito', description: 'Tortilla de trigo, frijoles molidos, quesos, su escogencia de carne. Servido con lechuga, chimichurri y papas fritas.', price: 3500 },
      { id: 'a7', name: 'Taco Tico', description: 'Rollito de tortilla crujiente relleno de carne o pollo con repollo, ketchup, mayonesa y papas fritas.', price: 4000 },
      { id: 'a8', name: 'Doble Taco Tico', description: 'Dos tacos, doble sabor. Con repollo, mayonesa, ketchup y papas fritas.', price: 6000 },
      { id: 'a9', name: 'Taco Tico de Camarón', description: 'Delicioso taco de camarón, con repollo, ketchup, mayonesa y papas.', price: 5000 },
      { id: 'a10', name: 'Quesadilla', description: 'Tortilla de harina, quesos, a escoger carne mechada, pollo mechado o vegetales. Servido con lechuga, chimichurri y papas.', price: 3500 },
      { id: 'a11', name: 'Tortilla Tica', description: 'Hecha a mano de maíz y servida con queso fresco y natilla.', price: 2000 },
      { id: 'a12', name: 'Tortilla Tita Rosa', description: 'Masa especial con queso fresco extra.', price: 2500 },
      { id: 'a13', name: 'Hot Dog', description: 'Servido con repollo, papas, ketchup y mayonesa de la casa.', price: 2500 },
      { id: 'a14', name: 'Salchipapas', description: 'Papas fritas con trocitos de salchichas, topping de ketchup y mayonesa.', price: 3000 },
    ]
  },
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    iconName: 'Utensils',
    items: [
      { id: 'h1', name: 'Tita\'s Burger', description: 'Torta casera de carne y carne mechada. Pan, jamón, tocineta, queso cheddar, lechuga, tomate, salsas. Servida con papas.', price: 5000, popular: true },
      { id: 'h2', name: 'Tica Burger', description: 'Torta casera de carne. Pan, jamón, tocineta, queso cheddar, lechuga, tomate, salsas. Servida con papas.', price: 4500 },
      { id: 'h3', name: 'Pollo / Chicken Burger', description: 'Torta de pollo. Pan, jamón, tocineta, queso cheddar, lechuga, tomate, salsas. Servida con papas.', price: 4500 },
      { id: 'h4', name: 'Dedos de Pollo o Pescado', description: 'Servidos con papas, ketchup y mayonesa de la casa.', price: 4000 },
    ]
  },
  {
    id: 'platos',
    title: 'Platos Fuertes',
    iconName: 'Utensils',
    items: [
      { id: 'pf1', name: 'Traditional Casado', description: 'Arroz, frijoles, plátano, queso local o huevo frito, lechuga y chimichurri. Opciones: chuleta, pechuga, bistec, tilapia, o vegetales.', price: 5500, popular: true },
      { id: 'pf2', name: 'Fajitas de Tita', description: 'Lomo de res o pollo salteadas con cebolla y chile dulce sobre lechuga y tomate. Papas fritas con mozzarella y tocineta.', price: 5500 },
      { id: 'pf3', name: 'Arroz con Camarones', description: 'Arroz salteado con camarones, ajo, vino blanco, vegetales, salsa Lizano. Con lechuga, chimichurri y papas fritas.', price: 5500 },
      { id: 'pf4', name: 'Arroz con Pollo', description: 'Arroz salteado con pollo mechado y vegetales. Servido con lechuga, chimichurri y papas fritas.', price: 4500, popular: true },
      { id: 'pf5', name: 'Arroz a la Jardinera', description: 'Arroz salteado con vegetales frescos. Servido con lechuga, chimichurri y papas fritas.', price: 4000 },
      { id: 'pf6', name: 'Cerdo a la Parrilla', description: 'Cerdo a la parrilla con chips de plátano, repollo y tomate.', price: 4000 },
      { id: 'pf7', name: 'Chicharrones', description: 'Trocitos de cerdo fritos con chips de plátano, repollo y tomate.', price: 4000 },
      { id: 'pf8', name: 'Sopa de la Casa', description: 'Caldo de res, carne mechada y vegetales. Servida con arroz y tortillas tostadas.', price: 3500 },
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    iconName: 'Utensils',
    items: [
      { id: 'e1', name: 'Ensalada Tropical', description: 'Lechuga, piña, maní, queso fresco y vinagreta de guayaba.', price: 3500 },
      { id: 'e2', name: 'Ensalada de la Casa', description: 'Lechuga, tomate, repollo, zanahoria, cebolla, chile dulce, queso fresco, vinagreta de la casa.', price: 3000 },
    ]
  },
  {
    id: 'heladeria',
    title: 'Heladería Kiwii',
    iconName: 'Cake',
    items: [
      { id: 'hk1', name: 'Batidos Naturales en Agua', description: 'Banano, Piña, Sandia, Mora, Melón, Fresa, Limonada, Papaya, Frutas mixtas, Kiwi, Guanabana.', price: 1500, popular: true },
      { id: 'hk2', name: 'Batidos Naturales en Leche', description: 'Banano, Piña, Sandia, Mora, Melón, Fresa, Papaya, Frutas mixtas, Kiwi, Guanabana.', price: 1800 },
      { id: 'hk3', name: 'Helados (Sencillo)', description: 'Sabores: Vainilla, Fresa, Chocolate, Combinado, Napolitano, Naranja holandesa, Coco, Chicle, Marshmallow, Ron con Pasas / Frutas. En cono o copa.', price: 1000 },
      { id: 'hk4', name: 'Helados (Doble)', description: 'Dos porciones de su helado favorito. En cono o copa.', price: 1500 },
      { id: 'hk5', name: 'Crepas', description: 'Deliciosas crepas dulces preparadas al momento.', price: 3800 },
      { id: 'hk6', name: 'Banana Split', description: 'Clásico postre con helado, banano, sirope y toppings.', price: 2500, popular: true },
      { id: 'hk7', name: 'Wafles', description: 'Wafles crujientes con acompañamientos dulces.', price: 2500 },
      { id: 'hk8', name: 'Milkshake', description: 'Batido cremoso de su sabor de helado favorito.', price: 2500 },
      { id: 'hk9', name: 'Café Frío', description: 'Refrescante bebida de café frío.', price: 2500 },
    ]
  },
  {
    id: 'postres',
    title: 'Postres Lía',
    iconName: 'Cake',
    items: [
      { id: 'p1', name: 'Piña Lía', description: 'Nuestra especialidad: Piña caramelizada en salsa cremosa con toques de canela. ¡El balance perfecto de frescura y dulzura!', price: 2000, popular: true },
      { id: 'p2', name: 'Flan de Coco', description: 'La estrella tropical. Suave, cremoso y con trocitos de coco que te transportan a nuestro bosque tropical.', price: 2500 },
      { id: 'p3', name: 'Flan de Vainilla', description: 'El clásico reconfortante. Sedoso, con el toque perfecto de vainilla y un caramelo que te hará sonreír.', price: 2500 },
      { id: 'p4', name: 'Cheesecake Fresa', description: 'Cremoso, irresistible y con un topping de fresas frescas que te recuerda lo dulce que es la vida.', price: 2500 },
      { id: 'p5', name: 'Maracuyá / Passion Fruit', description: '¡Explosión vibrante y cremosa! El balance perfecto entre lo ácido y lo dulce del maracuyá.', price: 2500 },
      { id: 'p6', name: 'Arroz con Leche', description: 'Receta tradicional de la abuela.', price: 1500 },
      { id: 'p7', name: 'Gelatina de Colores', description: 'Vasito de gelatina de sabores.', price: 1500 },
    ]
  },
  {
    id: 'bebidas',
    title: 'Bebidas Calientes y Refrescos',
    iconName: 'CupSoda',
    items: [
      { id: 'b1', name: 'Naturales de Tita', description: 'Piña con Arroz, Tamarindo, Chan-Chía, Jugo de Mango.', price: 1500 },
      { id: 'b2', name: 'Refrescos 600ml', description: 'Agua, Coca Cola, Coca Cola Zero, Ginger Ale, Fanta, Sprite, Club Soda, Te Frio.', price: 1500 },
      { id: 'b3', name: 'Otros Refrescos', description: 'Coca Cola 354ml, Jugos en lata (manzana, mango, fresa).', price: 1000 },
      { id: 'b4', name: 'Café Caliente', description: 'Café caliente tradicional.', price: 1000 },
      { id: 'b5', name: 'Chocolate Caliente', description: 'Bebida reconfortante de chocolate.', price: 1000 },
      { id: 'b6', name: 'Capuchino', description: 'Capuchino espumoso y caliente.', price: 2000 },
    ]
  },
  {
    id: 'cocteles',
    title: 'Cócteles y Cervezas',
    iconName: 'Wine',
    items: [
      { id: 'c1', name: 'Vino (Copa) / Wine (Glass)', description: 'Tinto: Merlot / Blanco: Chardonnay.', price: 4000 },
      { id: 'c2', name: 'Mojito', description: 'Ron, hierbabuena, limón, azúcar, soda.', price: 4000 },
      { id: 'c3', name: 'Daiquirí', description: 'Ron, limón, almíbar.', price: 4000 },
      { id: 'c4', name: 'Margarita Tradicional', description: 'Ron, limón, aïx, almíbar.', price: 4000 },
      { id: 'c5', name: 'Margarita Sabores', description: 'Mango, Maracuyá, Fresa.', price: 4000 },
      { id: 'c6', name: 'Tequila Sunrise', description: 'Tequila, jugo de naranja, granadina.', price: 4000 },
      { id: 'c7', name: 'Cuba Libre', description: 'Ron, limón, Coca-Cola.', price: 4000 },
      { id: 'c8', name: 'Piña Colada', description: 'Mezcla de piña colada, ron, piña.', price: 4000, popular: true },
      { id: 'c9', name: 'Cerveza Nacional / Domestic Beer', description: 'Imperial, Silver, Light, Pilsen.', price: 1500 },
      { id: 'c10', name: 'Cerveza Importada / Imported Beer', description: 'Corona / Smirnoff.', price: 2000 },
    ]
  }
];
