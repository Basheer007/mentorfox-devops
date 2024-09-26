import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface AccordionItem {
  id: number;
  title: string;
  content: string;
  isOpen: boolean; // Track whether this item is open
}
@Component({
  selector: 'app-guarentee-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guarentee-section.component.html',
  styleUrl: './guarentee-section.component.scss',
})
export class GuarenteeSectionComponent {
  accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: 'Who is Eligible?',
      content: ` At MentorFox, you can connect with a diverse range of tech talent, including fresh
          graduates and experienced
          professionals. Our candidates are skilled in various tech domains such as software development, data science,
          cloud computing, and more. `,
      isOpen: false,
    },
    {
      id: 2,
      title: 'How does it Work?',
      content: `Our candidates undergo comprehensive screening and training, emphasizing both technical skills and readiness for the fast-paced tech industry. We ensure they are not only technically adept but also adaptable to the evolving demands of the tech sector.`,
      isOpen: false,
    },
  ];

  height = '66px';
  rotate = '0deg';

  openAccordian(index: number) {
    this.accordionItems.forEach((item, i) => {
      // item.isOpen = i === index ? (item.isOpen = true) : false;
      if (i === index) {
        item.isOpen = true;
        this.height = this.height === '66px' ? '250px' : '66px'; // Toggle between heights
        this.rotate = this.rotate === '0deg' ? '180deg' : '0deg';
      } else {
        item.isOpen = false;
      }
    });
  }
}
