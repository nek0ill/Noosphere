import { log } from "@graphprotocol/graph-ts";
import {
  ActionAdded,
  ActionURI,
  Confirmation,
} from "../generated/ActionRepo/ActionRepo";
import { ActionEntity } from "../generated/schema";

/**
 * Handle a action added event to create an action entity.
 */
export function handleActionAdded(event: ActionAdded): void {
  log.info("handleActionAdded", []);
  // Skip if entity exists
  if (ActionEntity.load(event.params.id.toString())) {
    return;
  }
  // Create entity
  let entity = new ActionEntity(event.params.guid.toHexString());
  entity.subject = event.params.subject;
  entity.verb = event.params.verb;
  entity.object = event.params.object;
  entity.tool = event.params.tool;
  entity.affected = event.params.affected;
  entity.save();
}

/**
 * Handle a action uri event to update an action entity.
 */
export function handleActionURI(event: ActionURI): void {
  log.info("handleActionURI", []);
  // Find entity and return if not found
  let entity = ActionEntity.load(event.params.guid.toHexString());
  if (!entity) {
    return;
  }
  // Update entity's params
  entity.uri = event.params.uri;
  entity.save();
}

/**
 * Handle a confirmation event to update an action entity.
 */
export function handleConfirmation(event: Confirmation): void {
  log.info("handleConfirmation", []);
  // Find entity and return if not found
  let entity = ActionEntity.load(event.params.guid.toHexString());
  if (!entity) {
    return;
  }
  // Update entity's params
  entity.confirmationRuling = event.params.ruling;
  entity.confirmationEvidence = event.params.evidence;
  entity.confirmationWitness = event.params.witness;
  entity.save();
}