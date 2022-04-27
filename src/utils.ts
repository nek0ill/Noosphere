import { Address, BigInt, ByteArray, Bytes } from "@graphprotocol/graph-ts";
import { Jurisdiction as JurisdictionContract } from "../generated/Jurisdiction/Jurisdiction";
import {
  CaseEntity,
  CaseEventEntity,
  JurisdictionEntity
} from "../generated/schema";

/**
 * Load jurisdiction by id or create new.
 */
export function getJurisdictionEntity(id: string): JurisdictionEntity {
  let jurisdictionEntity = JurisdictionEntity.load(id);
  if (!jurisdictionEntity) {
    // Load jurisdiction name from contract
    let jurisdictionContract = JurisdictionContract.bind(Address.fromString(id));
    let jurisdictionContractName = jurisdictionContract.name();
    // Create jurisdiction enity
    jurisdictionEntity = new JurisdictionEntity(id);
    jurisdictionEntity.name = jurisdictionContractName;
    jurisdictionEntity.rulesCount = 0;
    jurisdictionEntity.casesCount = 0;
    jurisdictionEntity.save();
  }
  return jurisdictionEntity;
}

/**
 * Create new case event entity.
 */
export function saveCaseEventEntity(
  caseEntity: CaseEntity,
  caseContractAddress: Address,
  eventTransactionHash: Bytes,
  eventBlockTimestamp: BigInt,
  eventType: string,
  eventDataJson: string
): void {
  let caseEventEntityId = `${caseContractAddress.toHexString()}_${eventTransactionHash.toHexString()}`;
  let caseEventEntity = new CaseEventEntity(caseEventEntityId);
  caseEventEntity.caseEntity = caseEntity.id;
  caseEventEntity.createdDate = eventBlockTimestamp;
  caseEventEntity.type = eventType;
  caseEventEntity.data = Bytes.fromByteArray(ByteArray.fromUTF8(eventDataJson));
  caseEventEntity.save();
}