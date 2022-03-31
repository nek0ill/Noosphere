// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ActionRepoSet extends ethereum.Event {
  get params(): ActionRepoSet__Params {
    return new ActionRepoSet__Params(this);
  }
}

export class ActionRepoSet__Params {
  _event: ActionRepoSet;

  constructor(event: ActionRepoSet) {
    this._event = event;
  }

  get actionRepo(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class CaseCreated extends ethereum.Event {
  get params(): CaseCreated__Params {
    return new CaseCreated__Params(this);
  }
}

export class CaseCreated__Params {
  _event: CaseCreated;

  constructor(event: CaseCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GUIDCreated extends ethereum.Event {
  get params(): GUIDCreated__Params {
    return new GUIDCreated__Params(this);
  }
}

export class GUIDCreated__Params {
  _event: GUIDCreated;

  constructor(event: GUIDCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get guid(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoleCreated extends ethereum.Event {
  get params(): RoleCreated__Params {
    return new RoleCreated__Params(this);
  }
}

export class RoleCreated__Params {
  _event: RoleCreated;

  constructor(event: RoleCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get role(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class RuleAdded extends ethereum.Event {
  get params(): RuleAdded__Params {
    return new RuleAdded__Params(this);
  }
}

export class RuleAdded__Params {
  _event: RuleAdded;

  constructor(event: RuleAdded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get about(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get uri(): string {
    return this._event.parameters[2].value.toString();
  }

  get negation(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class RuleChanged extends ethereum.Event {
  get params(): RuleChanged__Params {
    return new RuleChanged__Params(this);
  }
}

export class RuleChanged__Params {
  _event: RuleChanged;

  constructor(event: RuleChanged) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get about(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get uri(): string {
    return this._event.parameters[2].value.toString();
  }

  get negation(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class RuleRemoved extends ethereum.Event {
  get params(): RuleRemoved__Params {
    return new RuleRemoved__Params(this);
  }
}

export class RuleRemoved__Params {
  _event: RuleRemoved;

  constructor(event: RuleRemoved) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Jurisdiction__ruleAddInputRuleStruct extends ethereum.Tuple {
  get about(): Bytes {
    return this[0].toBytes();
  }

  get uri(): string {
    return this[1].toString();
  }

  get effects(): Jurisdiction__ruleAddInputRuleEffectsStruct {
    return changetype<Jurisdiction__ruleAddInputRuleEffectsStruct>(
      this[2].toTuple()
    );
  }

  get negation(): boolean {
    return this[3].toBoolean();
  }
}

export class Jurisdiction__ruleAddInputRuleEffectsStruct extends ethereum.Tuple {
  get professional(): i32 {
    return this[0].toI32();
  }

  get social(): i32 {
    return this[1].toI32();
  }

  get personal(): i32 {
    return this[2].toI32();
  }
}

export class Jurisdiction__ruleGetResultValue0Struct extends ethereum.Tuple {
  get about(): Bytes {
    return this[0].toBytes();
  }

  get uri(): string {
    return this[1].toString();
  }

  get effects(): Jurisdiction__ruleGetResultValue0EffectsStruct {
    return changetype<Jurisdiction__ruleGetResultValue0EffectsStruct>(
      this[2].toTuple()
    );
  }

  get negation(): boolean {
    return this[3].toBoolean();
  }
}

export class Jurisdiction__ruleGetResultValue0EffectsStruct extends ethereum.Tuple {
  get professional(): i32 {
    return this[0].toI32();
  }

  get social(): i32 {
    return this[1].toI32();
  }

  get personal(): i32 {
    return this[2].toI32();
  }
}

export class Jurisdiction extends ethereum.SmartContract {
  static bind(address: Address): Jurisdiction {
    return new Jurisdiction("Jurisdiction", address);
  }

  GUIDHas(account: Address, guid: Bytes): boolean {
    let result = super.call("GUIDHas", "GUIDHas(address,bytes32):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromFixedBytes(guid)
    ]);

    return result[0].toBoolean();
  }

  try_GUIDHas(account: Address, guid: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("GUIDHas", "GUIDHas(address,bytes32):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromFixedBytes(guid)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  roleHas(account: Address, role: string): boolean {
    let result = super.call("roleHas", "roleHas(address,string):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromString(role)
    ]);

    return result[0].toBoolean();
  }

  try_roleHas(account: Address, role: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("roleHas", "roleHas(address,string):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromString(role)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ruleAdd(rule: Jurisdiction__ruleAddInputRuleStruct): BigInt {
    let result = super.call(
      "ruleAdd",
      "ruleAdd((bytes32,string,(int8,int8,int8),bool)):(uint256)",
      [ethereum.Value.fromTuple(rule)]
    );

    return result[0].toBigInt();
  }

  try_ruleAdd(
    rule: Jurisdiction__ruleAddInputRuleStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ruleAdd",
      "ruleAdd((bytes32,string,(int8,int8,int8),bool)):(uint256)",
      [ethereum.Value.fromTuple(rule)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ruleGet(id: BigInt): Jurisdiction__ruleGetResultValue0Struct {
    let result = super.call(
      "ruleGet",
      "ruleGet(uint256):((bytes32,string,(int8,int8,int8),bool))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return changetype<Jurisdiction__ruleGetResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_ruleGet(
    id: BigInt
  ): ethereum.CallResult<Jurisdiction__ruleGetResultValue0Struct> {
    let result = super.tryCall(
      "ruleGet",
      "ruleGet(uint256):((bytes32,string,(int8,int8,int8),bool))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Jurisdiction__ruleGetResultValue0Struct>(value[0].toTuple())
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get hub(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get actionRepo(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class JoinCall extends ethereum.Call {
  get inputs(): JoinCall__Inputs {
    return new JoinCall__Inputs(this);
  }

  get outputs(): JoinCall__Outputs {
    return new JoinCall__Outputs(this);
  }
}

export class JoinCall__Inputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }
}

export class JoinCall__Outputs {
  _call: JoinCall;

  constructor(call: JoinCall) {
    this._call = call;
  }
}

export class LeaveCall extends ethereum.Call {
  get inputs(): LeaveCall__Inputs {
    return new LeaveCall__Inputs(this);
  }

  get outputs(): LeaveCall__Outputs {
    return new LeaveCall__Outputs(this);
  }
}

export class LeaveCall__Inputs {
  _call: LeaveCall;

  constructor(call: LeaveCall) {
    this._call = call;
  }
}

export class LeaveCall__Outputs {
  _call: LeaveCall;

  constructor(call: LeaveCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RoleAssignCall extends ethereum.Call {
  get inputs(): RoleAssignCall__Inputs {
    return new RoleAssignCall__Inputs(this);
  }

  get outputs(): RoleAssignCall__Outputs {
    return new RoleAssignCall__Outputs(this);
  }
}

export class RoleAssignCall__Inputs {
  _call: RoleAssignCall;

  constructor(call: RoleAssignCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get role(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RoleAssignCall__Outputs {
  _call: RoleAssignCall;

  constructor(call: RoleAssignCall) {
    this._call = call;
  }
}

export class RoleRemoveCall extends ethereum.Call {
  get inputs(): RoleRemoveCall__Inputs {
    return new RoleRemoveCall__Inputs(this);
  }

  get outputs(): RoleRemoveCall__Outputs {
    return new RoleRemoveCall__Outputs(this);
  }
}

export class RoleRemoveCall__Inputs {
  _call: RoleRemoveCall;

  constructor(call: RoleRemoveCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get role(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RoleRemoveCall__Outputs {
  _call: RoleRemoveCall;

  constructor(call: RoleRemoveCall) {
    this._call = call;
  }
}

export class RuleAddCall extends ethereum.Call {
  get inputs(): RuleAddCall__Inputs {
    return new RuleAddCall__Inputs(this);
  }

  get outputs(): RuleAddCall__Outputs {
    return new RuleAddCall__Outputs(this);
  }
}

export class RuleAddCall__Inputs {
  _call: RuleAddCall;

  constructor(call: RuleAddCall) {
    this._call = call;
  }

  get rule(): RuleAddCallRuleStruct {
    return changetype<RuleAddCallRuleStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class RuleAddCall__Outputs {
  _call: RuleAddCall;

  constructor(call: RuleAddCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RuleAddCallRuleStruct extends ethereum.Tuple {
  get about(): Bytes {
    return this[0].toBytes();
  }

  get uri(): string {
    return this[1].toString();
  }

  get effects(): RuleAddCallRuleEffectsStruct {
    return changetype<RuleAddCallRuleEffectsStruct>(this[2].toTuple());
  }

  get negation(): boolean {
    return this[3].toBoolean();
  }
}

export class RuleAddCallRuleEffectsStruct extends ethereum.Tuple {
  get professional(): i32 {
    return this[0].toI32();
  }

  get social(): i32 {
    return this[1].toI32();
  }

  get personal(): i32 {
    return this[2].toI32();
  }
}

export class RuleUpdateCall extends ethereum.Call {
  get inputs(): RuleUpdateCall__Inputs {
    return new RuleUpdateCall__Inputs(this);
  }

  get outputs(): RuleUpdateCall__Outputs {
    return new RuleUpdateCall__Outputs(this);
  }
}

export class RuleUpdateCall__Inputs {
  _call: RuleUpdateCall;

  constructor(call: RuleUpdateCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get rule(): RuleUpdateCallRuleStruct {
    return changetype<RuleUpdateCallRuleStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class RuleUpdateCall__Outputs {
  _call: RuleUpdateCall;

  constructor(call: RuleUpdateCall) {
    this._call = call;
  }
}

export class RuleUpdateCallRuleStruct extends ethereum.Tuple {
  get about(): Bytes {
    return this[0].toBytes();
  }

  get uri(): string {
    return this[1].toString();
  }

  get effects(): RuleUpdateCallRuleEffectsStruct {
    return changetype<RuleUpdateCallRuleEffectsStruct>(this[2].toTuple());
  }

  get negation(): boolean {
    return this[3].toBoolean();
  }
}

export class RuleUpdateCallRuleEffectsStruct extends ethereum.Tuple {
  get professional(): i32 {
    return this[0].toI32();
  }

  get social(): i32 {
    return this[1].toI32();
  }

  get personal(): i32 {
    return this[2].toI32();
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
