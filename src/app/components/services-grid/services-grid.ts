import { Component } from '@angular/core';

interface TripType {
  title: string;
  description: string;
  color: string;
  image?: string;
  imageClass?: string;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.scss',
})
export class ServicesGridComponent {
  services: TripType[] = [
    {
      title: 'Family Vacation',
      description:
        'From traveling with young babies, to teens, I can plan it all. Give me the age ranges and type of vacation you want, and I will handle it from there!',
      color: 'bg-green-100 ring-1 ring-green-200',
      image: 'assets/Untitled-design123-683x1024.png',
      imageClass: 'object-[center_15%]',
    },
    {
      title: 'Romantic Getaway',
      description:
        'Whether it’s your honeymoon, your anniversary, or just because, I will plan it all for you. You and your partner just have to show up and enjoy!',
      color: 'bg-accent/20 ring-1 ring-accent/30',
      image: 'assets/Untitled-design131-683x1024.png',
    },
  ];
}
