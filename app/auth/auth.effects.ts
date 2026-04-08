import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatDialog } from '@angular/material/dialog';
import { CLOSE_MODAL_ERROR, SHOW_MODAL_ERROR } from "../store/actions/ui.actions";
import { exhaustMap, map } from "rxjs";
import { ModalComponent } from "../shared/layout/modal/modal.component";
@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private dialog: MatDialog
    ) {}

    openModalError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SHOW_MODAL_ERROR),
            exhaustMap(() => {
                const dialogRef = this.dialog.open(ModalComponent)
                return dialogRef.afterClosed().pipe(
                    map(result => CLOSE_MODAL_ERROR({ data: result }))
                );
            }),
        ),{dispatch: false}
    )
}