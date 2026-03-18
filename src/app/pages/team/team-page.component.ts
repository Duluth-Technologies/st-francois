import { Component } from '@angular/core';

type TeamMember = {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  bio: string[];
};

@Component({
  selector: 'app-team-page',
  standalone: true,
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {
  protected readonly teamMembers: TeamMember[] = [
    {
      name: 'Alicia COLSON',
      title: 'Directrice, co-fondatrice',
      image: '/media/alicia_colson.png',
      imageAlt: 'Portrait de Alicia Colson',
      bio: [
        'Directrice et co-fondatrice de l’établissement Saint François d’Assise, Alicia Colson est le professeur de français et d’histoire-géographie des élèves de 6e. Elle a exercé pendant sept ans comme directrice d’école à Nice. Elle a aussi enseigné à Nice et à Paris, dans le privé comme dans des établissements publics, en milieu rural, urbain et REP.',
        'Par ailleurs, elle a été coordinatrice pédagogique pour Fe y Alegría dans le cadre d’un volontariat avec la DCC, ainsi qu’assistante de recherche en pédagogie, en linguistique et en didactique des langues à Montréal. Elle est titulaire d’un double diplôme de master en linguistique et didactique des langues obtenu entre Paris X et l’UQAM à Montréal, ainsi que d’un Master 2 des métiers de l’enseignement à Nice.'
      ]
    },
    {
      name: 'Julie ALEXANDER',
      title: 'Référente Pédagogique - Anglais intensif',
      image: '/media/julie_alexander.jpg',
      imageAlt: 'Portrait de Julie Alexander',
      bio: [
        'Enseignante anglophone diplômée, Julie Alexander intervient dans les établissements publics comme dans les établissements privés depuis plus de vingt ans à Nice. Elle dispense les cours d’anglais de la section Intensive English et occupe la place de référente du pôle anglais dans notre établissement.'
      ]
    },
    {
      name: 'Jérôme DAHER',
      title: 'Intelligence émotionnelle et relationnelle',
      image: '/media/jerome_daher.jpg',
      imageAlt: 'Portrait de Jérôme Daher',
      bio: [
        'Jérôme Daher est formateur en intelligence émotionnelle et relationnelle, intervenant auprès de collégiens de la 6e à la 3e à raison d’une heure par semaine pour les aider à mieux comprendre leurs émotions et améliorer leurs relations.',
        'Titulaire d’un doctorat canonique en théologie et directeur de l’ITFP à Nice, il développe une approche qui place l’intelligence émotionnelle au cœur du développement humain, tant chez les jeunes que chez les adultes.'
      ]
    },
    {
      name: 'Silvia CALZONI',
      title: 'Sciences',
      image: '/media/sylvia_calzoni.jpg',
      imageAlt: 'Portrait de Silvia Calzoni',
      bio: [
        'Professeure et docteur en chimie, Silvia Calzoni enseigne les sciences au collège depuis septembre 2025. Elle a exercé dans différents établissements, en Italie, aux Etats-Unis. Sylvia Calzoni propose également pour les élèves inscrits en Intensive English renforcé un enseignement des sciences en anglais.'
      ]
    },
    {
      name: 'Guillaume BAYLET',
      title: 'Mathématiques',
      image: '/media/guillaume_baylet.jpg',
      imageAlt: 'Portrait de Guillaume Baylet',
      bio: [
        'Professeur de mathématiques dans différents établissements de Nice, Guillaume Baylet est de formation mathématiques et financières.'
      ]
    },
    {
      name: 'Jean-Baptiste RICARTE',
      title: 'EPS',
      image: '/media/jean_baptiste_ricarte.jpg',
      imageAlt: 'Portrait de Jean-Baptiste Ricarte',
      bio: [
        'Professeur d’EPS et coach sportif, Jean-Baptiste Ricarte s’appuie sur une formation à l’international pour proposer un enseignement exigeant, dynamique et structurant, en anglais.'
      ]
    }
  ];
}
