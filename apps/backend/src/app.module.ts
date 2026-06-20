import { Module } from '@nestjs/common';
import { StoreModule } from './store/store.module';
import { EventTypesModule } from './event-types/event-types.module';
import { AvailabilityModule } from './availability/availability.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [StoreModule, EventTypesModule, AvailabilityModule, BookingsModule],
})
export class AppModule {}
