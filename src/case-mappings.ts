import { BigInt } from "@graphprotocol/graph-ts";
import {
  CaseEntity,
  CaseParticipantEntity,
  JurisdictionRuleEntity
} from "../generated/schema";
import { RuleAdded, TransferSingle } from "../generated/templates/Case/Case";

/**
 * Handle a transfer single event to add a role to case participant.
 */
export function handleTransferSingle(event: TransferSingle): void {
  // Skip if case entity not exists
  let caseEntity = CaseEntity.load(event.address.toHexString());
  if (!caseEntity) {
    return;
  }
  // Define participant entity id (case address + account address)
  let caseParticipantEntityId = `${event.address.toHexString()}_${event.params.to.toHexString()}`;
  // Find or create participant entity
  let caseParticipantEntity = CaseParticipantEntity.load(
    caseParticipantEntityId
  );
  if (!caseParticipantEntity) {
    caseParticipantEntity = new CaseParticipantEntity(caseParticipantEntityId);
    caseParticipantEntity.caseEntity = caseEntity.id;
    caseParticipantEntity.account = event.params.to;
  }
  // Add role to participant entity
  if (event.params.id.equals(BigInt.fromString("1"))) {
    caseParticipantEntity.isAdmin = true;
  }
  if (event.params.id.equals(BigInt.fromString("2"))) {
    caseParticipantEntity.isSubject = true;
  }
  if (event.params.id.equals(BigInt.fromString("3"))) {
    caseParticipantEntity.isPlaintiff = true;
  }
  if (event.params.id.equals(BigInt.fromString("4"))) {
    caseParticipantEntity.isJudge = true;
  }
  if (event.params.id.equals(BigInt.fromString("5"))) {
    caseParticipantEntity.isWitness = true;
  }
  if (event.params.id.equals(BigInt.fromString("6"))) {
    caseParticipantEntity.isAffected = true;
  }
  caseParticipantEntity.save();
}

/**
 * Handle a rule added event to add a rule to case.
 */
export function handleRuleAdded(event: RuleAdded): void {
  // Skip if case entity not exists
  let caseEntity = CaseEntity.load(event.address.toHexString());
  if (!caseEntity) {
    return;
  }
  // Skip if rule entity not exists
  let ruleEntity = JurisdictionRuleEntity.load(event.params.ruleId.toString());
  if (!ruleEntity) {
    return;
  }
  // Add rule to case entity
  let caseEntityRules = caseEntity.rules;
  caseEntityRules.push(ruleEntity.id);
  caseEntity.rules = caseEntityRules;
  caseEntity.save();
}