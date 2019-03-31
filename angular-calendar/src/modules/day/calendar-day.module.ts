import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarDayViewComponent } from './calendar-day-view.component';
import { CalendarDayViewHourSegmentComponent } from './calendar-day-view-hour-segment.component';
import { CalendarDayViewEventComponent } from './calendar-day-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';

export {
  CalendarDayViewComponent,
  CalendarDayViewBeforeRenderEvent
} from './calendar-day-view.component';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule
  ],
  declarations: [
    CalendarDayViewComponent,
    CalendarDayViewHourSegmentComponent,
    CalendarDayViewEventComponent
  ],
  exports: [
    ResizableModule,
    DragAndDropModule,
    CalendarDayViewComponent,
    CalendarDayViewHourSegmentComponent,
    CalendarDayViewEventComponent
  ]
})
export class CalendarDayModule {}
