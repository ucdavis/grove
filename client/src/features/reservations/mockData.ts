export type ResourceKind = 'room' | 'bench' | 'equipment';

export type ReservationStatus = 'confirmed' | 'pending' | 'cancelled';

export type Resource = {
  availability: 'available' | 'limited' | 'unavailable';
  building: string;
  buildingCode: string;
  capacity?: number;
  childResourceCount?: number;
  description: string;
  features: string[];
  floor?: string;
  id: string;
  kind: ResourceKind;
  name: string;
  nextAvailable: string;
  parentName?: string;
  parentResourceId?: string;
  requiresApproval?: boolean;
  reservationMode: 'whole-resource' | 'child-resources';
  trainingRequired?: boolean;
};

export type Reservation = {
  building: string;
  end: string;
  id: string;
  purpose: string;
  resourceId: string;
  resourceKind: ResourceKind;
  resourceName: string;
  start: string;
  status: ReservationStatus;
};

export const buildings = [
  {
    address: 'One Shields Avenue, Davis, CA 95616',
    code: 'HUNT',
    name: 'Hunt Hall',
    resourceCount: 34,
  },
  {
    address: '1142 Shields Drive, Davis, CA 95616',
    code: 'RESN',
    name: 'Resnick Center',
    resourceCount: 61,
  },
  {
    address: '392 Old Davis Road, Davis, CA 95616',
    code: 'RMI',
    name: 'Robert Mondavi Institute',
    resourceCount: 18,
  },
] as const;

export const resources: Resource[] = [
  {
    availability: 'available',
    building: 'Resnick Center',
    buildingCode: 'RESN',
    capacity: 20,
    description: 'Flexible conference room with hybrid meeting technology.',
    features: ['Video conferencing', 'Display', 'Whiteboard'],
    floor: 'First floor',
    id: 'resnick-1155',
    kind: 'room',
    name: 'Room 1155',
    nextAvailable: 'Available now',
    reservationMode: 'whole-resource',
  },
  {
    availability: 'limited',
    building: 'Resnick Center',
    buildingCode: 'RESN',
    capacity: 10,
    description: 'Small meeting room for team discussions and interviews.',
    features: ['Display', 'Whiteboard'],
    floor: 'First floor',
    id: 'resnick-1210',
    kind: 'room',
    name: 'Room 1210',
    nextAvailable: 'Available at 2:30 PM',
    reservationMode: 'whole-resource',
  },
  {
    availability: 'available',
    building: 'Resnick Center',
    buildingCode: 'RESN',
    capacity: 24,
    childResourceCount: 2,
    description:
      'Teaching lab divided into independently reservable shared benches.',
    features: ['Sink', 'Gas', 'Power', 'Chemical hood nearby'],
    floor: 'Second floor',
    id: 'resnick-lab-2215',
    kind: 'room',
    name: 'Teaching Lab 2215',
    nextAvailable: '2 benches available now',
    reservationMode: 'child-resources',
  },
  {
    availability: 'available',
    building: 'Resnick Center',
    buildingCode: 'RESN',
    capacity: 2,
    description: 'Shared wet-lab bench with access to standard utilities.',
    features: ['Sink', 'Gas', 'Power', 'Chemical hood nearby'],
    floor: 'Second floor',
    id: 'resnick-bench-a3',
    kind: 'bench',
    name: 'Bench A3',
    nextAvailable: 'Available now',
    parentName: 'Teaching Lab 2215',
    parentResourceId: 'resnick-lab-2215',
    requiresApproval: true,
    reservationMode: 'whole-resource',
  },
  {
    availability: 'limited',
    building: 'Resnick Center',
    buildingCode: 'RESN',
    capacity: 2,
    description: 'Shared wet-lab bench with balance and power access.',
    features: ['Power', 'Balance', 'Sink'],
    floor: 'Second floor',
    id: 'resnick-bench-b1',
    kind: 'bench',
    name: 'Bench B1',
    nextAvailable: 'Available tomorrow at 8:00 AM',
    parentName: 'Teaching Lab 2215',
    parentResourceId: 'resnick-lab-2215',
    requiresApproval: true,
    reservationMode: 'whole-resource',
  },
  {
    availability: 'available',
    building: 'Hunt Hall',
    buildingCode: 'HUNT',
    capacity: 32,
    description: 'Classroom configured for lectures, workshops, and exams.',
    features: ['Projector', 'Lecture capture', 'Whiteboard'],
    floor: 'First floor',
    id: 'hunt-106',
    kind: 'room',
    name: 'Room 106',
    nextAvailable: 'Available now',
    reservationMode: 'whole-resource',
  },
  {
    availability: 'limited',
    building: 'Hunt Hall',
    buildingCode: 'HUNT',
    description: 'Compound light microscope with a digital camera attachment.',
    features: ['Digital camera', '40× objective', 'Booking required'],
    floor: 'Second floor',
    id: 'hunt-microscope-02',
    kind: 'equipment',
    name: 'Microscope 02',
    nextAvailable: 'Available at 4:00 PM',
    reservationMode: 'whole-resource',
    trainingRequired: true,
  },
  {
    availability: 'unavailable',
    building: 'Robert Mondavi Institute',
    buildingCode: 'RMI',
    capacity: 16,
    description: 'Controlled sensory evaluation space for research sessions.',
    features: ['Individual booths', 'Controlled lighting', 'Service counter'],
    floor: 'First floor',
    id: 'rmi-lab-12',
    kind: 'room',
    name: 'Sensory Evaluation Lab',
    nextAvailable: 'Available Friday at 9:00 AM',
    requiresApproval: true,
    reservationMode: 'whole-resource',
  },
  {
    availability: 'available',
    building: 'Robert Mondavi Institute',
    buildingCode: 'RMI',
    description: 'Portable projector kit for presentations and events.',
    features: ['HDMI adapter', 'Tripod screen', 'Carry case'],
    floor: 'Equipment desk · First floor',
    id: 'rmi-portable-projector',
    kind: 'equipment',
    name: 'Portable Projector',
    nextAvailable: 'Available now',
    reservationMode: 'whole-resource',
  },
];

export const reservations: Reservation[] = [
  {
    building: 'Resnick Center',
    end: '2026-09-29T11:30:00',
    id: 'res-101',
    purpose: 'Project planning meeting',
    resourceId: 'resnick-1155',
    resourceKind: 'room',
    resourceName: 'Room 1155',
    start: '2026-09-29T10:00:00',
    status: 'confirmed',
  },
  {
    building: 'Resnick Center',
    end: '2026-10-01T12:00:00',
    id: 'res-102',
    purpose: 'Sample preparation',
    resourceId: 'resnick-bench-a3',
    resourceKind: 'bench',
    resourceName: 'Bench A3',
    start: '2026-10-01T09:00:00',
    status: 'pending',
  },
  {
    building: 'Robert Mondavi Institute',
    end: '2026-10-04T15:00:00',
    id: 'res-103',
    purpose: 'Graduate research symposium',
    resourceId: 'rmi-portable-projector',
    resourceKind: 'equipment',
    resourceName: 'Portable Projector',
    start: '2026-10-04T13:00:00',
    status: 'confirmed',
  },
];

export const resourceKindLabels: Record<ResourceKind, string> = {
  bench: 'Bench',
  equipment: 'Equipment',
  room: 'Room',
};
