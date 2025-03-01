import { Contributor } from '../../types/api';

export interface SoccerTeam {
    id: string;
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    league: string;
    stadium: string;
    stadiumCapacity: number;
    joinedYear: number;
    headCoach: string;
    teamUrl: string;
    wikipediaUrl: string;
    logoUrl: string;
}



export interface State {
    id: string;
    name: string;
    code: string;
    displayName: string;
    iconUrl: string;
    regionIds: string[];
}

export interface ContributorInfoProps {
    contributor: Contributor;
    index: number;
}

export interface LocationInfoProps {
    contributor: Contributor;
}

export interface StatsDisplayProps {
    contributor: Contributor;
}

export interface LocationTooltipProps {
    contributor: Contributor;
}

export interface ContributorTooltipProps {
    contributor: Contributor;
}

export interface ContributorsTableProps {
    contributors: Contributor[];
    isLoading: boolean;
    error: Error | null;
} 