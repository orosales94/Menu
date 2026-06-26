import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    id: 'antojos',
    title: 'Antojos y Comida Rápida',
    titleEn: 'Cravings & Fast Food',
    iconName: 'Pizza',
    items: [
      { id: 'a1', name: 'Nachos', description: 'Tortillas de maíz, queso cheddar y mozzarella, chimichurri, frijoles molidos y escogencia de carne mechada, pollo mechado o vegetales.', descriptionEn: 'Corn tortillas, cheddar and mozzarella cheese, chimichurri, refried beans, and your choice of pulled beef, shredded chicken, or veggies.', price: 4000, popular: true },
      { id: 'a2', name: 'Papanachos', description: 'Deliciosas papas fritas en lugar de tortillas con todos los arreglos de nuestros nachos.', descriptionEn: 'Delicious french fries instead of corn tortillas.', price: 4500 },
      { id: 'a3', name: 'Patacones', description: 'Patacones con su escogencia de carne mechada, pollo mechado o vegetales. Acompañados con frijoles molidos, queso fresco y chimichurri.', descriptionEn: 'Smashed crunchy green plantain and your choice of shredded beef, shredded chicken or veggies. With sides of refried beans, fresh cheese, and chimichurri.', price: 4000, popular: true },
      { id: 'a4', name: 'Empanada Arreglada', description: 'Empanada casera rellena, guarnecida con repollo, ketchup y mayonesa.', descriptionEn: 'Homemade empanada topped with cabbage, ketchup and mayo.', price: 2500 },
      { id: 'a5', name: 'Empanada Sencilla', description: 'Empanada casera rellena con su escogencia de carne mechada, pollo mechado, queso o frijoles molidos.', descriptionEn: 'Homemade and stuffed with your choice of shredded beef, chicken, cheese, or refried beans.', price: 2000 },
      { id: 'a6', name: 'Tico Burrito', description: 'Tortilla de trigo, frijoles molidos, quesos, su escogencia de carne. Servido con lechuga, chimichurri y papas fritas.', descriptionEn: 'Flour tortilla, refried beans, cheddar and mozzarella cheese, your choice of pulled beef, shredded chicken, or veggies. Served with lettuce, chimichurri, and fries.', price: 3500 },
      { id: 'a7', name: 'Taco Tico', description: 'Rollito de tortilla crujiente relleno de carne o pollo con repollo, ketchup, mayonesa y papas fritas.', descriptionEn: 'Crispy rolled corn tortilla stuffed in with your choice of shredded beef or chicken, topped with cabbage, ketchup, homemade mayo and fries.', price: 4000 },
      { id: 'a8', name: 'Doble Taco Tico', description: 'Dos tacos, doble sabor. Con repollo, mayonesa, ketchup y papas fritas.', descriptionEn: 'Two tacos, double tasty.', price: 6000 },
      { id: 'a9', name: 'Taco Tico de Camarón', nameEn: 'Shrimp Tico Taco', description: 'Delicioso taco de camarón, con repollo, ketchup, mayonesa y papas.', descriptionEn: 'Topped with cabbage, ketchup and mayo.', price: 5000 },
      { id: 'a10', name: 'Quesadilla', description: 'Tortilla de harina, quesos, a escoger carne mechada, pollo mechado o vegetales. Servido con lechuga, chimichurri y papas.', descriptionEn: 'Flour tortilla, cheddar and mozzarella cheese, your choice of pulled beef or chicken or veggies. Served with lettuce, chimichurri, and fries.', price: 3500 },
      { id: 'a11', name: 'Tortilla Tica', description: 'Hecha a mano de maíz y servida con queso fresco y natilla.', descriptionEn: 'Handmade corn tortilla served with local white cheese on the side and sour cream.', price: 2000 },
      { id: 'a12', name: 'Tortilla Tita Rosa', description: 'Masa especial con queso fresco extra.', descriptionEn: 'Special dough with extra fresh cheese.', price: 2500 },
      { id: 'a13', name: 'Hot Dog', description: 'Servido con repollo, papas, ketchup y mayonesa de la casa.', descriptionEn: 'Served with cabbage and fries, ketchup, and homemade mayo.', price: 2500 },
      { id: 'a14', name: 'Salchipapas', description: 'Papas fritas con trocitos de salchichas, topping de ketchup y mayonesa.', descriptionEn: 'French fries and sausages bites, topped with ketchup and homemade mayo.', price: 3000 },
    ]
  },
  {
    id: 'hamburguesas',
    title: 'Hamburguesas',
    titleEn: 'Burgers',
    iconName: 'Utensils',
    items: [
      { id: 'h1', name: 'Tita\'s Burger', description: 'Torta casera de carne y carne mechada. Pan, jamón, tocineta, queso cheddar, lechuga, tomate, salsas. Servida con papas.', descriptionEn: 'Homemade beef patty and pulled beef. Bun, ham, bacon, cheddar, lettuce, tomato, sauces. Served with fries.', price: 5000, popular: true },
      { id: 'h2', name: 'Tica Burger', description: 'Torta casera de carne. Pan, jamón, tocineta, queso cheddar, lechuga, tomate, salsas. Servida con papas.', descriptionEn: 'Homemade beef patty. Bun, ham, bacon, cheddar, lettuce, tomato, sauces. Served with fries.', price: 4500 },
      { id: 'h3', name: 'Pollo Burger', nameEn: 'Chicken Burger', description: 'Torta de pollo. Pan, jamón, tocineta, queso cheddar, lechuga, tomate, salsas. Servida con papas.', descriptionEn: 'Chicken patty. Bun, ham, bacon, cheddar, lettuce, tomato, sauces. Served with fries.', price: 4500 },
      { id: 'h4', name: 'Dedos de Pollo o Pescado', nameEn: 'Chicken or Fish Fingers', description: 'Servidos con papas, ketchup y mayonesa de la casa.', descriptionEn: 'Served with fries, ketchup, and homemade mayo.', price: 4000 },
    ]
  },
  {
    id: 'platos',
    title: 'Platos Fuertes',
    titleEn: 'Main Dishes',
    iconName: 'Utensils',
    items: [
      { id: 'pf1', name: 'Traditional Casado', description: 'Arroz, frijoles, plátano, queso local o huevo frito, lechuga y chimichurri. Opciones: chuleta, pechuga, bistec, tilapia, o vegetales.', descriptionEn: 'Rice, beans, ripe plantain, local cheese or egg, lettuce with chimichurri. Grilled options of: Pork chop, chicken breast, beef loin, or Tilapia fish fillet in garlic sauce. Or sautéed veggies.', price: 5500, popular: true },
      { id: 'pf2', name: 'Fajitas de Tita', nameEn: 'Tita\'s Fajitas', description: 'Lomo de res o pollo salteadas con cebolla y chile dulce sobre lechuga y tomate. Papas fritas con mozzarella y tocineta.', descriptionEn: 'Beef loin or chicken breast fajitas sautéed with onions and bell pepper. Served over lettuce and fresh tomato. Fries topped with melted mozzarella and bacon bits.', price: 5500 },
      { id: 'pf3', name: 'Arroz con Camarones', nameEn: 'Rice with Shrimp', description: 'Arroz salteado con camarones, ajo, vino blanco, vegetales, salsa Lizano. Con lechuga, chimichurri y papas fritas.', descriptionEn: 'Sautéed rice with shrimp, garlic, white wine, carrots, bell pepper, onions, achiote, salsa Lizano. Served with lettuce, chimichurri, and fries.', price: 5500 },
      { id: 'pf4', name: 'Arroz con Pollo', nameEn: 'Rice with Chicken', description: 'Arroz salteado con pollo mechado y vegetales. Servido con lechuga, chimichurri y papas fritas.', descriptionEn: 'Sautéed rice with shredded chicken, carrots, bell pepper, onions, achiote, salsa Lizano. Served with lettuce, chimichurri, and fries.', price: 4500, popular: true },
      { id: 'pf5', name: 'Arroz a la Jardinera', nameEn: 'Rice with Vegetables', description: 'Arroz salteado con vegetales frescos. Servido con lechuga, chimichurri y papas fritas.', descriptionEn: 'Sautéed rice with broccoli, carrots, bell pepper, onions, celery, achiote, salsa Lizano. Served with lettuce, chimichurri, and fries.', price: 4000 },
      { id: 'pf6', name: 'Cerdo a la Parrilla', nameEn: 'Grilled Pork', description: 'Cerdo a la parrilla con chips de plátano, repollo y tomate.', descriptionEn: 'Grilled pork meat with plantain chips, cabbage, and tomato.', price: 4000 },
      { id: 'pf7', name: 'Chicharrones', nameEn: 'Fried Pork Bites', description: 'Trocitos de cerdo fritos con chips de plátano, repollo y tomate.', descriptionEn: 'Fried pork bites with plantain chips, cabbage and tomato.', price: 4000 },
      { id: 'pf8', name: 'Sopa de la Casa', nameEn: 'Soup of the House', description: 'Caldo de res, carne mechada y vegetales. Servida con arroz y tortillas tostadas.', descriptionEn: 'Beef broth, pulled beef, and veggies. Served with rice and tortilla chips.', price: 3500 },
    ]
  },
  {
    id: 'ensaladas',
    title: 'Ensaladas',
    titleEn: 'Salads',
    iconName: 'Utensils',
    items: [
      { id: 'e1', name: 'Ensalada Tropical', nameEn: 'Tropical Salad', description: 'Lechuga, piña, maní, queso fresco y vinagreta de guayaba.', descriptionEn: 'Lettuce, pineapple, peanuts, fresh cheese, and guava vinaigrette.', price: 3500 },
      { id: 'e2', name: 'Ensalada de la Casa', nameEn: 'House Salad', description: 'Lechuga, tomate, repollo, zanahoria, cebolla, chile dulce, queso fresco, vinagreta de la casa.', descriptionEn: 'Mix lettuce, tomato, cabbage, carrots, onions, bell pepper, fresh local cheese, and homemade vinaigrette.', price: 3000 },
    ]
  },
  {
    id: 'heladeria',
    title: 'Helados y Postres',
    titleEn: 'Ice Cream & Desserts',
    iconName: 'Cake',
    items: [
      { id: 'hk1', name: 'Batidos Naturales en Agua', nameEn: 'Natural Smoothies with Water', description: 'Banano, Piña, Sandia, Mora, Melón, Fresa, Limonada, Papaya, Frutas mixtas, Kiwi, Guanabana.', descriptionEn: 'Banana, Pineapple, Watermelon, Blackberry, Melon, Strawberry, Lemonade, Papaya, Mixed fruits, Kiwi, Soursop.', price: 1500, popular: true },
      { id: 'hk2', name: 'Batidos Naturales en Leche', nameEn: 'Natural Smoothies with Milk', description: 'Mismos sabores, preparados en leche.', descriptionEn: 'Same flavors, prepared with milk.', price: 1800 },
      { id: 'hk3', name: 'Helados (Sencillo)', nameEn: 'Ice Cream (Single)', description: 'Sabores: Vainilla, Fresa, Chocolate, Combinado, Napolitano, Naranja holandesa, Coco, Chicle, Marshmallow, Ron con Pasas / Frutas. En cono o copa.', descriptionEn: 'Flavors: Vanilla, Strawberry, Chocolate, Combined, Neapolitan, Dutch Orange, Coconut, Bubblegum, Marshmallow, Rum & Raisin / Fruits. Cone or cup.', price: 1000 },
      { id: 'hk4', name: 'Helados (Doble)', nameEn: 'Ice Cream (Double)', description: 'Dos porciones de su helado favorito. En cono o copa.', descriptionEn: 'Two scoops of your favorite ice cream. Cone or cup.', price: 1500 },
      { id: 'hk5', name: 'Crepas', nameEn: 'Crepes', description: 'Deliciosas crepas dulces preparadas al momento.', descriptionEn: 'Delicious sweet crepes prepared to order.', price: 3800 },
      { id: 'hk6', name: 'Banana Split', description: 'Clásico postre con helado, banano, sirope y toppings.', descriptionEn: 'Classic dessert with ice cream, banana, syrup and toppings.', price: 2500, popular: true },
      { id: 'hk7', name: 'Wafles', nameEn: 'Waffles', description: 'Wafles crujientes con acompañamientos dulces.', descriptionEn: 'Crispy waffles with sweet sides.', price: 2500 },
      { id: 'hk8', name: 'Milkshake', description: 'Batido cremoso de su sabor de helado favorito.', descriptionEn: 'Creamy milkshake of your favorite ice cream flavor.', price: 2500 },
      { id: 'hk9', name: 'Café Frío', nameEn: 'Iced Coffee', description: 'Refrescante bebida de café frío.', descriptionEn: 'Refreshing iced coffee drink.', price: 2500 },
    ]
  },
  {
    id: 'postres',
    title: 'Postres Lía',
    titleEn: 'Lía Desserts',
    iconName: 'Cake',
    items: [
      { id: 'p1', name: 'Piña Lía', description: 'Nuestra especialidad: Piña caramelizada en salsa cremosa con toques de canela. ¡El balance perfecto de frescura y dulzura!', descriptionEn: 'Our specialty: Caramelized pineapple in a creamy cinnamon sauce. The perfect balance of freshness and sweetness!', price: 2000, popular: true },
      { id: 'p2', name: 'Flan de Coco', nameEn: 'Coconut Flan', description: 'La estrella tropical. Suave, cremoso y con trocitos de coco que te transportan a nuestro bosque tropical.', descriptionEn: 'The tropical star. Smooth, creamy, and with coconut bits that transport you to our tropical forest.', price: 2500 },
      { id: 'p3', name: 'Flan de Vainilla', nameEn: 'Vanilla Flan', description: 'El clásico reconfortante. Sedoso, con el toque perfecto de vainilla y un caramelo que te hará sonreír.', descriptionEn: 'The comforting classic. Silky, with the perfect touch of vanilla and caramel that will make you smile.', price: 2500 },
      { id: 'p4', name: 'Cheesecake Fresa', nameEn: 'Strawberry Cheesecake', description: 'Cremoso, irresistible y con un topping de fresas frescas que te recuerda lo dulce que es la vida.', descriptionEn: 'Creamy, irresistible, and with a fresh strawberry topping that reminds you how sweet life is.', price: 2500 },
      { id: 'p5', name: 'Maracuyá', nameEn: 'Passion Fruit Dessert', description: '¡Explosión vibrante y cremosa! El balance perfecto entre lo ácido y lo dulce del maracuyá.', descriptionEn: 'Vibrant and creamy explosion! The perfect balance between the tartness and sweetness of passion fruit.', price: 2500 },
      { id: 'p6', name: 'Cheesecake de Libeydi', description: 'Cheesecake de maracuyá y hecho en casa por la hija de Tita.', descriptionEn: 'Tita\'s daughter\'s Passion Fruit Cheesecake.', price: 2500 },
      { id: 'p7', name: 'Arroz con Leche', nameEn: 'Rice Pudding', description: 'Receta tradicional de la abuela.', descriptionEn: 'Traditional grandmother\'s recipe.', price: 1500 },
      { id: 'p8', name: 'Gelatina de Colores', nameEn: 'Gelatine Cup', description: 'Vasito de gelatina de sabores.', descriptionEn: 'Mixed colors and flavors gelatin cup.', price: 1500 },
    ]
  },
  {
    id: 'bebidas',
    title: 'Bebidas Calientes y Refrescos',
    titleEn: 'Hot Drinks & Beverages',
    iconName: 'CupSoda',
    items: [
      { id: 'b1', name: 'Naturales de Tita', nameEn: 'Traditional Natural Drinks', description: 'Piña con Arroz, Tamarindo, Chan-Chía, Jugo de Mango.', descriptionEn: 'Pineapple and Rice, Tamarindo, Chan & Chia seeds, Natural Mango Juice.', price: 1500 },
      { id: 'b2', name: 'Refrescos 600ml', nameEn: 'Soft Bottled Drinks', description: 'Agua, Coca Cola, Coca Cola Zero, Ginger Ale, Fanta, Sprite, Club Soda, Te Frio.', descriptionEn: 'Water, Coca Cola, Coca Cola Zero, Ginger Ale, Fanta, Sprite, Club Soda, Iced Tea.', price: 1500 },
      { id: 'b3', name: 'Otros Refrescos', nameEn: 'Other Bottled Drinks', description: 'Coca Cola 354ml, Jugos en lata (manzana, mango, fresa).', descriptionEn: 'Coca Cola 12 oz, Juices in a can (apple, mango, strawberry).', price: 1000 },
      { id: 'b4', name: 'Café Caliente', nameEn: 'Hot Coffee', description: 'Café caliente tradicional.', descriptionEn: 'Traditional hot coffee.', price: 1000 },
      { id: 'b5', name: 'Chocolate Caliente', nameEn: 'Hot Chocolate', description: 'Bebida reconfortante de chocolate.', descriptionEn: 'Comforting hot chocolate drink.', price: 1000 },
      { id: 'b6', name: 'Capuchino', nameEn: 'Cappuccino', description: 'Capuchino espumoso y caliente.', descriptionEn: 'Hot and frothy cappuccino.', price: 2000 },
    ]
  },
  {
    id: 'cocteles',
    title: 'Cócteles y Cervezas',
    titleEn: 'Cocktails & Beers',
    iconName: 'Wine',
    items: [
      { id: 'c1', name: 'Vino (Copa)', nameEn: 'Wine (Glass)', description: 'Tinto: Merlot / Blanco: Chardonnay.', descriptionEn: 'Red: Merlot / White: Chardonnay.', price: 4000 },
      { id: 'c2', name: 'Mojito', description: 'Ron, hierbabuena, limón, azúcar, soda.', descriptionEn: 'Rum, mint, lime, sugar, soda.', price: 4000 },
      { id: 'c3', name: 'Daiquirí', description: 'Ron, limón, almíbar.', descriptionEn: 'Rum, lime, sugar syrup.', price: 4000 },
      { id: 'c4', name: 'Margarita Tradicional', description: 'Ron, limón, triple sec, almíbar.', descriptionEn: 'Rum, lime, triple sec, sugar syrup.', price: 4000 },
      { id: 'c5', name: 'Margarita Sabores', nameEn: 'Flavored Margarita', description: 'Mango, Maracuyá, Fresa.', descriptionEn: 'Mango, Passion Fruit, Strawberry.', price: 4000 },
      { id: 'c6', name: 'Tequila Sunrise', description: 'Tequila, jugo de naranja, granadina.', descriptionEn: 'Tequila, orange juice, grenadine.', price: 4000 },
      { id: 'c7', name: 'Cuba Libre', description: 'Ron, limón, Coca-Cola.', descriptionEn: 'Rum, lime, Coke.', price: 4000 },
      { id: 'c8', name: 'Piña Colada', description: 'Mezcla de piña colada, ron, piña.', descriptionEn: 'Piña colada mix, rum, pineapple.', price: 4000, popular: true },
      { id: 'c9', name: 'Cerveza Nacional', nameEn: 'Domestic Beer', description: 'Imperial, Silver, Light, Pilsen.', descriptionEn: 'Imperial, Silver, Light, Pilsen.', price: 1500 },
      { id: 'c10', name: 'Cerveza Importada', nameEn: 'Imported Beer', description: 'Corona / Smirnoff.', descriptionEn: 'Corona / Smirnoff.', price: 2000 },
    ]
  }
];

// Sección de Galería
// Agrega aquí las URLs de tus imágenes alojadas en GitHub u otro servidor
// Ejemplo: 'https://raw.githubusercontent.com/usuario/repo/main/imagen1.jpg'
export const galleryImages: { url: string; title: string, titleEn?: string }[] = [
  // Descomenta y modifica estas líneas para agregar tus imágenes:
  // { 
  //   url: 'https://raw.githubusercontent.com/usuario/repo/main/imagen1.jpg', 
  //   title: 'Nuestro famoso Casado', 
  //   titleEn: 'Our famous Casado' 
  // },
];
