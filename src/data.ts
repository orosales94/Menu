import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    id: 'desayunos',
    title: 'Desayunos',
    iconName: 'Coffee',
    items: [
      {
        id: 'd1',
        name: 'Pinto Tita Rosa',
        description: 'Gallo pinto tradicional con dos huevos al gusto, plátano maduro, natilla, queso frito y tortillas palmeadas.',
        price: 3500,
        popular: true,
      },
      {
        id: 'd2',
        name: 'Desayuno Campesino',
        description: 'Gallo pinto, carne en salsa, huevo frito, aguacate y tortillas.',
        price: 4200,
      },
      {
        id: 'd3',
        name: 'Omelette Especial',
        description: 'Huevos batidos con jamón, queso, cebolla y chile dulce. Acompañado de tostadas y mantequilla.',
        price: 3200,
      },
      {
        id: 'd4',
        name: 'Chorreadas con Natilla',
        description: 'Dos chorreadas de maíz tierno, servidas con abundante natilla casera.',
        price: 2500,
      }
    ]
  },
  {
    id: 'casados',
    title: 'Casados y Almuerzos',
    iconName: 'Utensils',
    items: [
      {
        id: 'c1',
        name: 'Casado con Pollo a la Plancha',
        description: 'Arroz, frijoles, ensalada verde, picadillo de papa, plátano maduro y filete de pollo.',
        price: 4500,
      },
      {
        id: 'c2',
        name: 'Casado con Bistec Encebollado',
        description: 'Arroz, frijoles, ensalada de repollo, picadillo de chayote, plátano maduro y jugoso bistec.',
        price: 4800,
        popular: true,
      },
      {
        id: 'c3',
        name: 'Casado con Pescado Empanizado',
        description: 'Arroz, frijoles, ensalada verde, puré de papa, limón y filete de pescado.',
        price: 5000,
      },
      {
        id: 'c4',
        name: 'Arroz con Pollo',
        description: 'Tradicional arroz con pollo, acompañado de papas fritas y ensalada rusa.',
        price: 4500,
        popular: true,
      },
      {
        id: 'c5',
        name: 'Olla de Carne',
        description: 'Sopa tradicional de res con verduras frescas (yuca, papa, chayote, elote, tiquisque). Incluye arroz.',
        price: 5500,
      }
    ]
  },
  {
    id: 'bocas',
    title: 'Bocas y Antojos',
    iconName: 'Pizza',
    items: [
      {
        id: 'b1',
        name: 'Chifrijo Tita',
        description: 'Capas de arroz, frijoles tiernos, chicharrón de concha, pico de gallo y aguacate. Servido con tortillas.',
        price: 4500,
        popular: true,
      },
      {
        id: 'b2',
        name: 'Patacones con Frijoles',
        description: '4 patacones grandes con frijoles molidos, pico de gallo y queso rallado.',
        price: 3000,
      },
      {
        id: 'b3',
        name: 'Enyucados',
        description: 'Croquetas de yuca rellenas de carne molida arreglada (Orden de 3).',
        price: 2800,
      }
    ]
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    iconName: 'CupSoda',
    items: [
      {
        id: 'be1',
        name: 'Frescos Naturales',
        description: 'Cas, Mora, Tamarindo, Guanábana o Limonada con Hierbabuena.',
        price: 1500,
      },
      {
        id: 'be2',
        name: 'Café Chorreado',
        description: 'Café puro de Costa Rica, recién chorreado.',
        price: 1200,
      },
      {
        id: 'be3',
        name: 'Batidos en Leche',
        description: 'Fresa, Papaya, Banana o Mixto.',
        price: 2000,
      },
      {
        id: 'be4',
        name: 'Gaseosas',
        description: 'Coca-Cola, Fresca, Ginger Ale (600ml).',
        price: 1200,
      }
    ]
  },
  {
    id: 'postres',
    title: 'Postres',
    iconName: 'Cake',
    items: [
      {
        id: 'p1',
        name: 'Arroz con Leche',
        description: 'Receta de la abuela, con canela, clavo de olor y pasas.',
        price: 1800,
        popular: true,
      },
      {
        id: 'p2',
        name: 'Tres Leches',
        description: 'Bizcocho húmedo en tres tipos de leche, cubierto con merengue y cereza.',
        price: 2500,
      },
      {
        id: 'p3',
        name: 'Flan de Coco',
        description: 'Flan cremoso con caramelo y un toque de coco rallado.',
        price: 2000,
      }
    ]
  }
];
